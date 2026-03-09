---
layout: default
title: Version P1.26
has_children: false
parent: Versions
nav_order: 931
---


# Version P1.26

**Released:** Dec 29, 2025

This release focuses on faster guest resolution through the initial **AI ChatBot**, stronger operational control with **Inventory inspection and completion workflows**, a tighter feedback loop for **Guidebooks**, improved operational follow-up with **Damage Classification**, and automated Re-Opened report handling when tasks are overdue.

**AI ChatBot**
![AI ChatBot](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.26/ai_chatbot_conversation.png)

**Damage Classification**
![Damage Classification](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.26/damage_classification.png)

**Inventory Inspections & Completion Tasks**
![Inventory Inspections & Completion Tasks](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.26/inventory_inspection_task.png)

**Guidebooks Lobby Details & Missing Info Request**
![Guidebooks Lobby Details & Missing Info Request](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.26/guidebooks_lobby_details_and_info_request.png)

### What's New?

#### <u>AI ChatBot</u>

- Launched the initial guest-facing AI ChatBot across multiple channels (Airbnb, Rentals United, Website Chat, WhatsApp, and Telegram).
- Uses Guidebooks and internal SOP knowledge to answer guest questions.
- Supports actions including: opening reports, ordering services, requesting Early Check-In or Late Check-Out (complimentary or paid by availability), and delivering invoice links on demand.

#### <u>Inventory</u>

- Strengthened Inventory operations with inspection and completion workflows to surface and resolve missing items.
- Includes reusable templates, typology-based setup, and controlled stock movement with full validation and audit tracking.

#### <u>Guidebooks</u>

- Full missing-information loop: agents can request gaps, manage and resolve requests centrally.
- Lobby details are now exposed as a virtual guide when available (opening hours, address, map link).
- Agents can file missing information requests directly from the Guidebooks tab.

#### <u>Reports & Tasks</u>

**Damage Classification:**
- Added mandatory Damage Classification in the mobile cleaning-task report flow, distinguishing Guest Damage vs Wear & Tear.
- Reports classified as "Guest Damage" now surface a **Deposit Candidate** badge.
- New Damage Classification filter added to the Reports screen.

**Automation:**
- Eligible reports are automatically moved to Re-Opened when linked tasks become overdue, ensuring missed tasks are visible and rescheduled on time.

#### <u>Airbnb Integration</u>

- Updated to the latest required API version (2025.06.30) to keep the connection stable and ensure bookings and messaging continue to work as expected.

#### <u>Enhancements & Bug Fixes</u>

- Website/App — images and videos now load faster and more smoothly across website pages.
- Website/App — pages feel quicker to open and navigate, especially on slower connections.
- Website/App — lobby information is now hidden for hotel rooms when it does not apply.
- Website/App — First Day Experience wording now consistently uses room-based terms for hotels.
- SIBO — opening hours are shown as "Daily" when the same hours apply all week.
- Website/App — addresses are now displayed in a clearer and more consistent format everywhere.
- SIBO — zip code and country information added to improve address accuracy.
- SIBO — digital key instructions now better match hotel room access flows.
- SIBO — removed unnecessary required fields to make requesting invoices easier.
- Website/App — newly added hotels now appear correctly in the website header.
- SIBO — the Get Invoice tab is now always visible with clearer pre-checkout messaging.
- Website/App — updated the mobile app foundation to support new iOS and Android releases.
- SIBO — daily hotel refresh tasks are now clearly separated from checkout cleanings.
- SIBO — hovering a cleaning task now shows full hotel, unit, and room details.
- Fixed — old property links did not redirect correctly after single properties were converted to buildings.
- Fixed — Android users could not navigate properly when system navigation buttons were visible on screen.
- Fixed — typed text was not visible while writing messages in chat on iOS and Android apps.

#### <u>What's Coming Next</u>

- **Booking Flow Step 2 Redesign** *(Website/App)* — a clearer booking step to change dates, number of guests, and options more easily.
- **Faster Website Navigation** *(Website/App)* — better internal page connections for smoother browsing.
- **Improved Page Visibility Across the Web** *(Website/App)* — structured page details to help pages appear more clearly when shared or discovered online.
- **Blog Under the Main Website** *(Website/App)* — moving blog content under the main website path for a more consistent experience.
- **Maximum Stay Length for Partner Bookings** *(SIBO)* — support for setting a maximum stay length when working with external rental partners.
- **Remembering Last Search Results** *(Website/App)* — guests will be able to return to their most recent search results.
- **Guest Membership Program** *(Website/App)* — a new membership experience designed to reward returning guests with exclusive benefits and a more personalized journey.

---
[View original release email](./versionP1-26.html)
