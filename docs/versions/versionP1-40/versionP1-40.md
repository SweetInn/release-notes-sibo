---
layout: version
title: Version P1.40
has_children: false
parent: Versions
nav_order: 921
release_date: "Jun 23, 2026"
---


# Version P1.40

**Released:** Jun 23, 2026

This latest version brings to life a brand new feature, expands our compliance capabilities in Barcelona, and takes another step forward in proactive lock health monitoring — on top of a solid set of fixes and improvements across the board.

**Roster — Employee Shift Management**
![Roster — Employee Shift Management](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1782232469/Release%20Notes/P1.40/roster.jpg)

**Nuki BT Disconnection Detection**
![Nuki BT Disconnection Detection](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1782232469/Release%20Notes/P1.40/Nuki.jpg)

### What's New?

#### <u>Website & App</u>

**Online Check-In:**
- **Document Upload Validation** — The system now enforces two rules: the total number of uploaded documents cannot exceed the number of guests on the booking, and the same document cannot be submitted twice. This prevents duplicate uploads and protects OCI status from getting stuck when a guest and a back-office agent upload documents at the same time.

#### <u>SIBO</u>

**Employee Shift Management:**
- **Roster — Employee Shift Management** — Managers can configure teams, contracts (fixed or flexible), leave types, holiday calendars, and shift templates. The weekly planner supports bulk shift assignment, rotating planning workflows, team and reportee filters, rest-day visibility, and contract conflict warnings. Employees can view their schedule, submit leave requests, and track their balance and request history. This also lays the foundation for intelligent auto-assignment of tasks based on who is on shift, where they are, and what they can do.

**Compliance:**
- **Mossos Report — Barcelona** — Barcelona properties are legally required to report guest ID details to the Mossos d'Esquadra for every stay. Operations can now generate and submit the report directly from SIBO, cutting out the manual steps and keeping compliance in one place.

**Lock Management:**
- **Nuki BT Disconnection Detection** — When a Nuki smart lock loses its Bluetooth connection between the bridge and the keypad, a record is created on the IOT locks dashboard and a report and task are opened automatically — following the same pattern as low-battery alerts. The feature respects the per-provider autoLockHealthTasks setting to control whether monitoring is active for that account.

**Mobile App:**
- **SIBO App — Force Update** — App version requirements are now managed through the CMS. Users running an older version are shown a prompt to update before continuing. On iOS the prompt links to the App Store; on Android it links to the latest build for manual install.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Missing Booking Cleanup: a backend maintenance flow now safely finalizes cancelled "Missing Booking" OTA records, cleaning up booking logs, availability data, and booking status to prevent orphaned records.
- Fixed *(SIBO)* — Nuki Bridge Offline Detection: when a Nuki bridge loses its cloud connection, the lock now correctly appears as offline on the IOT dashboard instead of showing as healthy while silently failing to deliver entry codes.
- Fixed *(SIBO)* — Unit Room Count Sync: scalar room-count fields such as inner bathrooms are now correctly synced to all linked properties when a unit is updated. Previously, null values were silently skipped, causing mismatches between room amenities and property room count fields.
- Fixed *(SIBO)* — Expedia VCC Charge Fix: Expedia virtual card bookings now charge nights only, matching the VCC balance. Previously, city tax was incorrectly added for Paris bookings, causing Stripe payment failures at check-in.
- Fixed *(SIBO)* — Stay Extension Date Update: when a guest pays for a stay extension via the guest dashboard, the booking checkout date now updates correctly. Previously, a partner sync error could leave the original checkout date, causing digital key access to expire too early.
- Fixed *(SIBO)* — Paid LCO Upgrade Flow: when a guest with a pending free late check-out request asks for a later, paid time, the bot now correctly offers the paid option instead of repeating the free-request status or escalating to an agent.
- Fixed *(SIBO)* — CMS Appliance Tab Loading: the Appliances tab under Property Guides in the CMS for the Sweet Inn account now loads correctly instead of spinning indefinitely.
- Fixed *(SIBO)* — WhatsApp Login Spinner: the loading spinner during WhatsApp staff login now stops on failure and shows a clear error message instead of looping indefinitely.
- Fixed *(SIBO App)* — Tasks Filter for Cleaning Manager: cleaning managers can now filter tasks correctly in the SIBO app.
- Fixed *(SIBO App)* — Duplicate Lock Battery Reports: multiple identical low-battery lock reports for the same lock and battery level are no longer created on the same day.
- Fixed *(SIBO App)* — Cleaner Access Permissions: new cleaner users created via Cleaning Manager no longer incorrectly receive Cleaning Manager access, preventing field cleaners from seeing manager-level sections in SIBO.

---
[View original release email](./release-email.html)
