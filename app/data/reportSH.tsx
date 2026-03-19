import AsyncStorage from "@react-native-async-storage/async-storage";

const REPORTS_STORAGE_KEY = "reports";

export type TimelineEvent = {
  action: "reported" | "upvoted" | "verified" | "resolved" | "severe";
  by: string;
  time: string;
};

export type AccessibilitySubtype =
  | "escalator"
  | "elevator"
  | "ramp"
  | "foot_traffic";


export type ReportType = "protest" | "event" | "accessibility";

export type UserRole = "security" | "concordian" | "admin";


export type Report = {
  id: string;
  name: string;
  description: string;
  type: ReportType;
  building: string;
  floor: string;
  image?: string;
  date: string;
  time: string;
  accessibilitySubtype?: AccessibilitySubtype;
  submittedBy: UserRole;
  isScheduledEvent: boolean;
  isSevere: boolean;
  upvotedBy: string[];
  isResolved: boolean;
  resolvedBy?: string;
  isVerifiedBySecurity: boolean;
  eventStartDate?: string;
  eventEndDate?: string;
  timeline: TimelineEvent[];  // ← new
};

const parseReports = async (): Promise<Report[]> => {
  try {
    const raw = await AsyncStorage.getItem(REPORTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error parsing reports:", error);
    return [];
  }
};

export const saveNewReport = async (report: Report): Promise<void> => {
  try {
    const reports = await parseReports();
    const reportWithDefaults = {
      ...report,
      isVerifiedBySecurity: report.submittedBy === "security",
      timeline: [
        {
          action: "reported" as const,
          by: report.submittedBy,
          time: report.time,
        },
        // auto-add verified entry if security submitted
        ...(report.submittedBy === "security" ? [{
          action: "verified" as const,
          by: "security",
          time: report.time,
        }] : []),
      ],
    };
    reports.push(reportWithDefaults);
    await AsyncStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(reports));
  } catch (error) {
    console.error("Error saving report:", error);
  }
};

export const verifyReport = async (reportId: string): Promise<void> => {
  try {
    const reports = await parseReports();
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const updated = reports.map((r) =>
      r.id === reportId
        ? {
            ...r,
            isVerifiedBySecurity: true,
            timeline: [...(r.timeline ?? []), {
              action: "verified" as const,
              by: "security",
              time: now,
            }],
          }
        : r
    );
    await AsyncStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error verifying report:", error);
  }
};

export const getReports = async (): Promise<Report[]> => {
  try {
    const reports = await parseReports();
    return reports.sort((a, b) => {
      const aDateTime = new Date(`${a.date} ${a.time}`).getTime();
      const bDateTime = new Date(`${b.date} ${b.time}`).getTime();
      return bDateTime - aDateTime;
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

export const getReportsByBuilding = async (
  buildingId: string,
): Promise<Report[]> => {
  const reports = await getReports();
  return reports.filter((report) => report.building === buildingId);
};

// Returns only admin-created scheduled future events (for calendar)
export const getScheduledEvents = async (): Promise<Report[]> => {
  const reports = await getReports();
  return reports.filter((r) => r.isScheduledEvent);
};

// Returns only non-scheduled reports (for notifications/map)
export const getActiveReports = async (): Promise<Report[]> => {
  const reports = await getReports();
  return reports.filter((r) => !r.isScheduledEvent);
};

// Upvote a report — userId must not be the original reporter
export const upvoteReport = async (
  reportId: string,
  userId: string,
): Promise<void> => {
  try {
    const reports = await parseReports();
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const updated = reports.map((r) => {
      if (r.id !== reportId) return r;
      if (r.name === userId) return r;
      if ((r.upvotedBy ?? []).includes(userId)) return r;
      return {
        ...r,
        upvotedBy: [...(r.upvotedBy ?? []), userId],
        timeline: [...(r.timeline ?? []), {
          action: "upvoted" as const,
          by: userId,
          time: now,
        }],
      };
    });
    await AsyncStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error upvoting report:", error);
  }
};

// Mark a report as resolved
export const markReportResolved = async (
  reportId: string,
  resolvedBy: string,
): Promise<void> => {
  try {
    const reports = await parseReports();
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const updated = reports.map((r) =>
      r.id === reportId
        ? {
            ...r,
            isResolved: true,
            resolvedBy,
            timeline: [...(r.timeline ?? []), {
              action: "resolved" as const,
              by: resolvedBy,
              time: now,
            }],
          }
        : r
    );
    await AsyncStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error marking report resolved:", error);
  }
};

// Mark a report as severe — security only (enforce in UI)
export const markReportSevere = async (reportId: string): Promise<void> => {
  try {
    const reports = await parseReports();
    const report = reports.find((r) => r.id === reportId);
    if (!report) {
      console.log("markReportSevere: report not found", reportId);  // ← add
      return;
    }

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const updated = reports.map((r) =>
      r.id === reportId
        ? {
            ...r,
            isSevere: true,
            timeline: [...(r.timeline ?? []), {
              action: "severe" as const,
              by: "security",
              time: now,
            }],
          }
        : r
    );

    await AsyncStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));

    const nearBuildingData = {
      buildingId: report.building,
      buildingName: report.building,
      time: now,
      isSevere: true,
    };
    console.log("Writing nearBuilding:", nearBuildingData);  // ← add
    await AsyncStorage.setItem("nearBuilding", JSON.stringify(nearBuildingData));
    console.log("nearBuilding written successfully");  // ← add

  } catch (error) {
    console.error("Error marking report severe:", error);
  }
};

export const deleteAllReports = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(REPORTS_STORAGE_KEY);
    console.log("All reports deleted successfully");
  } catch (error) {
    console.error("Error deleting reports:", error);
  }
};
