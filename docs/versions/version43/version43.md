---
layout: default
title: Version 43
has_children: true
parent: Versions
nav_order: 2.7
---


# Version 43

### What's New?

#### <u>Multi-Calendar</u>
- Introduced lazy loading for faster page loading.

#### <u>General</u>
- Introduced property internal name support across all SIBO pages.<br/>Designed for teams who communicate using internal property names.

#### <u>Services</u>
- New Transportation Service Form
  - Upon usage, the system selects the best-fit transport service based on the questionnaire.
  - Automatically generates a payment link.
  - Alerts the local team to schedule the order with the service provider once payment is completed.
- New setting allows cities to set the minimum notice time required by service providers to place orders.
- New Early Check-In / Late Check-Out Service Form
  - System creates a temporary block and generates a payment link upon usage.
  - Upon payment, the temporary block becomes permanent. Additionally, ETA/ETD and DKs time limits are updated.
  - For Early Check-In, the ETA sets to 23:00 PM
  - For Late Check-Out, the ETD sets to 06:00 AM
  - For Late Check-Out, the Cleaning task moves to next date 08:00 AM

#### <u>Unified-Inbox</u>
- Enabled transfer of chatbot conversations to agents with added information.
- Expanded the use of WhatsApp buttoned templates in chatbot menus beyond just the booking query steps.

#### <u>House Rules</u>
- Launched a customized House Rules manager.
- Added a House Rules override mechanism on the website for users opting for customized rules.

#### <u>Reports</u>
- New sorting options: By Property Name and By Task Assignee.
- Integrated a comment counter to preview available comments before accessing the comment sidebar.

### Bug Fixes

- Resolved issue causing the Tasks page to crash when clicking the “Clear Filter” button.
- Fixed the broken view of Unified-inbox Facebook conversations on mobile.
- Addressed the display of system-used report categories for user selection.
- Rectified the non-display issue of property lists in the cleaning tool company’s form.
- Fixed a bug causing the description tab to crash when editing certain properties.
- Corrected the incorrect sorting of SIBO alerts.
