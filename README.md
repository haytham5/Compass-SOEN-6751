# 🧭 Compass - Concordia Campus Safety & Navigation

## 📌 Overview

**Compass** is a mobile application designed to improve **campus safety, navigation, and accessibility** at Concordia University.

Built using **React Native (Expo)** and grounded in **Calm Technology principles**, the app provides **real-time, crowdsourced updates** about campus conditions. It empowers users to make informed decisions while minimizing stress, cognitive load, and information overload.

---

## 🎯 Objectives

- Improve **situational awareness** on an open urban campus
- Reduce **uncertainty and anxiety** during disruptions (e.g., protests, closures)
- Support **accessible navigation** for all users
- Provide a **customizable and calm user experience**

---

## ✨ Key Features

### 📝 User Reports
- Users can report and view:
  - Accessibility issues (elevators, escalators, ramps)
  - Crowding and disruptions
  - Events or unusual activity

- Each report includes:
  - 📍 Location (building & floor)
  - 🕒 Time & date
  - 🏷 Category (protest, event, accessibility)
  - 👤 User role (student, security, admin)
  - 👍 Community validation (upvotes)
  - ✅ Status updates (verified, severe, resolved)

---

### 🗺 Map Interface
- Interactive campus map using **react-native-maps**
- Visual indicators:
  - Color-coded markers based on report type
  - Bubble size reflects **number of reports per building**
- Real-time spatial awareness of campus activity

---

### 🔔 Personalized Updates
- Users can:
  - Subscribe to specific buildings
  - Set **day & time-based preferences**
- Home screen modes:
  - **All Activity View**
  - **Personalized View (Preferences-based)**

---

### 📅 Event Calendar
- View upcoming campus events:
  - Protests, activities, announcements
- Filter by:
  - Building
- Admin capabilities:
  - Create events
  - Edit/delete **their own events only**

---

### 🌿 Calm Mode
A simplified interface for high-stress situations:
- Reduced visual complexity
- Focus on essential information
- Soft color palette
- Swipe right to remove reports from view
- Separate tab to:
  - Review removed reports
  - Restore them anytime

---
 ### 🌚 Dark Mode
 The app also offer a dark mode that can be accessed in the user's settings

## 🛠 Tech Stack

### 📱 Frontend
- React Native (Expo)
- TypeScript

### 📦 Core Libraries
- `expo-router` – Navigation
- `react-native-maps` – Map visualization
- `@react-native-async-storage/async-storage` – Local persistence
- `expo-linear-gradient` – UI styling
- `lucide-react-native` – Icons
- `react-native-safe-area-context` – Layout handling
- `react-native-view-shot` – Custom map markers
- `expo-navigation-bar` – Android navigation customization

---

## 💾 Data & State Management

- Local storage using **AsyncStorage**
- No backend – data is **simulated and persisted locally**
- Includes:
  - User authentication (mocked)
  - Report storage
  - Event storage
  - User preferences

---

## ⚙️ Installation & Setup

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later recommended)  
  👉 https://nodejs.org/

- **npm** or **yarn**

- **Expo CLI** (installed globally)
```bash
npm install -g expo-cli
```
### 💪🏼 Install Dependencies
```bash
npm install
```

### ⏯️ Running the App
```bash
npx expo start
```
Then choose one of the following:

📱 Run on physical device
* Install Expo Go:
 * iOS: App Store
 * Android: Google Play
* Scan the QR code from the terminal

## 🧪 Default Test Accounts

You can log in using different roles to explore features:

| Role        | Capabilities                          |
|-------------|--------------------------------------|
| Concordian  | View reports, create reports, personalize feed |
| Security    | Verify reports, mark as severe or resolved     |
| Admin       | Create, edit, and delete their own events      |

## 👥 Team Members

CODING
  * Ynes-Tamazight Djoudi (ID: 40212570)
  * Haytham Hnine (ID: 40128181)
  * Celeste Mittelhauser (ID: 40307980)

REPORT
  * Amr Abdalla (ID: 40310151)
  * Michel Assouka (ID: 40295568)
  * Melina Medjdoub (ID: 40101065)





