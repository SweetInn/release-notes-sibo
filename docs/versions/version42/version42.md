---
layout: default
title: Version 42
has_children: true
parent: Versions
nav_order: 2.6
---


# Version 42

### What's New?

#### <u>Operations Platform</u>
- [Introduced a fresh deposit capture procedure.](./depositFlow/depositFlow.html)
- [Now featuring a maintenance task summary to gather details about tasks completion.](./depositFlow/taskSummary.html)
- Task reports now display both descriptions and associated images.

#### <u>Unified Inbox</u>
- Whatsapp chatbot now sends messages with button options, replacing the old numbered lists.
- Chatbot now identifies booking IDs even within sentences.

#### <u>Services</u>
- For altered bookings, paid early check-ins are shifted to the new date if possible. Alerts are displayed otherwise.
- For altered bookings, paid late check-outs are adjusted to the new date when feasible. Alerts will pop up if not possible.

#### <u>Journeys</u>
- Guests now receive notifications for both approval and denial of free late check-out requests.
- Guests are also informed when their free early check-in requests are approved.
- Guests now receive notifications 

#### <u>Scalability</u>
- Enabling an unlimited number of accounts per user.

#### <u>Website</u>
- Online Check-In - The "Set Arrival Time" option is concealed if check-in is within 24 hours. An advisory note is displayed instead.
- Digital Keys - Add translations to missing texts shown in the link.

#### <u>Guidebooks</u>
- Categories are automatically selected upon local tip creation by users.
- Hidden inactive elements during guidebook creation or editing.

### Bug Fixes

#### <u>Operations Platform</u>
- Fixed the dysfunctional link in the report when the task pertains to cleaning.

#### <u>Pricing Tool</u>
- Resolved the issue where the BI system didn't update the early check-in or late check-out prices for booked/blocked nights.

#### <u>Multi-Calendar</u>
- Addressed the issue with multiple property blocking functionality.
- Corrected the timing error for blocks with auto-release.
- Fixed the display error showing reservations a day early on mobile for users in different time zones.

#### <u>Journeys</u>
- Resolved instances where certain journey messages weren't re-scheduled upon alteration of a booking.

#### <u>Cleaning Tool</u>
- Cleaning costs settings now reflect the correct currency based on city.

#### <u>Unified Inbox</u>
- Chatbot no longer responds with "undefined" when users end their messages with a period sign.
- Information is now appropriately logged in the unified inbox dashboard when the chatbot transfers conversations to live agents.

#### <u>Booking</u>
- Mended the check-in readiness status display issue on mobile.
- Resolved the issue where the estimated departure time remained unconfirmed when it matched the default property time.

#### <u>Rules Management</u>
- Fixed crashes encountered while creating or updating rules.

#### <u>Invoices</u>
- Dubai invoices now correctly display the UAE Dirham, instead of Euros.

#### <u>In-Stay Review</u>
- Addressed occasional crashes on the in-stay review page.
