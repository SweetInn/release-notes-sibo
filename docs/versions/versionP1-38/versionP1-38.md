---
layout: version
title: Version P1.38
has_children: false
parent: Versions
nav_order: 922
release_date: "Jun 07, 2026"
---


# Version P1.38

**Released:** Jun 07, 2026

This is a big one for cleaners and maintenance technicians. The all-new native SIBO App My Tasks is live — task details, access codes, guest movements, checklists, file previews, and address lookup, all consolidated in one sleek screen. Agents can now clock in and out, take breaks, and receive real-time push notifications the moment something on their schedule changes — all without leaving the app. They can decline a task with a clear reason, finish tasks with a new summary form flow, and tap any location name to instantly get the full address and navigate there.

And the app speaks your language — literally. AI-powered translations automatically convert report titles and descriptions into the agent's language. Whether a cleaner in Paris reads in French or a maintenance technician in Milan reads in Italian, every task shows up in the language they work in — no manual translation, no guesswork, no miscommunication on the ground.

The SIBO App just got a whole lot smarter.

**SIBO App — My Tasks**
![SIBO App — My Tasks](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1780840081/Release%20Notes/P1.38/sibo-app_tasks.jpg)

**SIBO App — Push Notifications for Today's Tasks**
![SIBO App — Push Notifications for Today's Tasks](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1780840558/Release%20Notes/P1.38/sibo-app_push-notifications.jpg)

**SIBO App — Shift & Break Controls**
![SIBO App — Shift & Break Controls](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1780842228/Release%20Notes/P1.38/sibo-app_shifts.jpg)

### What's New?

#### <u>Operations</u>

**My Tasks:**
- **My Tasks** — The all-new native My Tasks screen is live for cleaners and maintenance technicians. Task details, access codes, guest movements, checklists, file previews, and address lookup are all consolidated in one sleek, fast screen. The old web-based Tasks and Cleanings screens have been retired. Every core workflow — viewing, starting, declining, finishing tasks, and navigating to locations — has been fully validated before rollout.
- **Task Decline** — Maintenance technicians can now decline a task they cannot take. When declining, they select a reason from a managed list that can be updated without a new app release. The reason is saved to the task and is visible to dispatchers in the back office. For tasks linked to a report, the task moves to Done and the report reopens. For standalone tasks, the task returns to the queue for reassignment.
- **Finish Task & Task Summary** — Maintenance technicians can mark a task as finished from the Task Details screen. For tasks that require a summary, the technician completes a Task Summary form before the task closes. The submitted summary is available in the back office.
- **Address Bottom Sheet** — Any property or location name shown on a task card or in Task Details is now tappable. Tapping it opens a bottom sheet with the full address, making it easy for cleaners and technicians to navigate to the right location from anywhere in the app.

**Shift & Notifications:**
- **Shift & Break Controls** — The My Tasks screen header now shows the agent's current shift state at all times. Agents can start and end their shift and take breaks with a single tap. All state changes are confirmed with a brief notification and reflected immediately in the UI. Opening a task without an active shift prompts the agent to start their shift first.
- **Push Notifications for Today's Tasks** — Agents receive a push notification whenever a task assigned to them for today is created, reassigned, rescheduled, or canceled. Tapping the notification opens the task detail screen directly.

**Task Translations:**
- **AI-Powered Task Translations** — Report titles and descriptions are automatically converted into the agent's language — English, French, Italian, Spanish, German, and Chinese. Cleaners and maintenance technicians see task content in the language they work in, with no manual translation required.

#### <u>SIBO</u>

**Direct Sales & Services:**
- **Reduce Booking Deposit** — Authorized agents can now lower or fully remove a booking's security deposit from the back office. The edit option appears on the deposit card for agents with the right permission, is disabled when an active pre-authorization or charge exists, and every change is recorded in the booking's system log with the agent's name, original amount, and new amount.
- **Users Management — Quick Filter Presets** — A new Quick Filter dropdown has been added to the Users Management search bar. Selecting a preset — such as "Discount up to 15%", "Can create coupons", or "Can reduce deposit" — instantly shows only users with that permission. The preset works alongside other active filters, and clearing it restores the previous view.

#### <u>Integrations</u>

**Digital Keys:**
- **Nuki — Bridge Offline Detection** — When a Nuki smart lock's bridge loses its connection, the system now detects this and marks the lock as offline on the IOT dashboard. Previously, the lock appeared healthy even when unreachable, causing entry codes to fail silently without any alert to the team.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Salto lock code is now preserved when a booking is altered to a property that shares the same Salto lock. The code is no longer deleted when the destination uses the same lock.
- Enhancement *(SIBO)* — Unified Inbox shift and snooze logic improved: agents can now go off-shift while conversations are snoozed, and snoozed conversations that wake up while the assignee is off-shift are automatically unassigned for active team members to handle.
- Fixed *(Website/App)* — Guest chat no longer shows a blank message bubble when an agent reply includes text copied from Google Translate.
- Fixed *(Website/App)* — City Page: the "Nearby Dates" section now appears below the property grid instead of above it.
- Fixed *(Website/App)* — City Page: search dates selected by a guest are now carried over when opening a property from the map.
- Fixed *(Website/App)* — City Page: on mobile, selecting a property marker now shows only the mobile card; the desktop card no longer appears underneath it.
- Fixed *(Website/App)* — City Page: property cards now correctly display "Apartment" in singular form instead of "Apartments".
- Fixed *(Website/App)* — City Page: URLs with an invalid date range (check-in after check-out) now show a clear validation message instead of the generic "No matches for your search" state.
- Fixed *(Website/App)* — Recent Searches now shows the correct city or apartment name instead of raw system codes (e.g. cities.moscova-iii).
- Fixed *(SIBO)* — Installment charges that were getting stuck in a pending state now progress correctly.
- Fixed *(Online Check-In)* — Marriott bookings that were getting stuck on the Damage Waiver/Incomplete payments step during online check-in now complete correctly.

---
[View original release email](./release-email.html)
