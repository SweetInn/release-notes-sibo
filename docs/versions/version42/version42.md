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
- Introduced a fresh deposit capture procedure. <span class="fs-1">[Watch Me!](./depositFlow/depositFlow.html){: .btn .btn-green }</span>
- Now featuring a maintenance task summary to gather details about tasks completion.

#### <u>Unified Inbox</u>
- Whatsapp chatbot now sends messages with button options, replacing the old numbered lists.

#### <u>Services</u>
- For altered bookings, paid early check-ins are shifted to the new date if possible. Alerts are displayed otherwise.
- Likewise, for altered bookings, paid late check-outs are adjusted to the new date when feasible. Alerts will pop up if not possible.

#### <u>Journeys</u>
- Guests now receive notifications for both approval and denial of free late check-out requests.
- Guests are also informed when their free early check-in requests are approved.

### Enhancements

#### <u>Users</u>
- Removed restrictions on the number of accounts and cities each user can have.

#### <u>Unified Inbox</u>
- Chatbot now identifies booking IDs even within sentences.

#### <u>Website</u>
- The "Set Arrival Time" option in the OCI form is concealed if check-in is within 24 hours. An advisory note is displayed instead.

#### <u>Guidebooks</u>
- Categories are automatically selected upon local tip creation by users.
- Hidden inactive elements during guidebook creation or editing.

#### <u>Operations Platform</u>
- Task reports now display both descriptions and associated images.

### Bug Fixes

- Operations Platform - Fixed the dysfunctional link in the report when the task pertains to cleaning.
- Pricing Tool - Resolved the issue where the BI system didn't update the early check-in or late check-out prices for booked/blocked nights.
- Multi-Calendar - Addressed the issue with multiple property blocking functionality.
- Multi-Calendar - Corrected the timing error for blocks with auto-release.
- Multi-Calendar - Fixed the display error showing reservations a day early on mobile for users in different time zones.
- Journeys - Resolved instances where certain journey messages weren't re-scheduled upon alteration of a booking.
- Cleaning Tool - Cleaning costs settings now reflect the correct currency based on city.
- Unified Inbox - Chatbot no longer responds with "undefined" when users end their messages with a period sign.
- Unified Inbox - Information is now appropriately logged in the unified inbox dashboard when the chatbot transfers conversations to live agents.
- Booking - Mended the check-in readiness status display issue on mobile.
- Booking - Resolved the issue where the estimated departure time remained unconfirmed when it matched the default property time.
- Rules Management - Fixed crashes encountered while creating or updating rules.
- Invoices - Dubai invoices now correctly display the UAE Dirham, instead of Euros.
- In-Stay Review - Addressed occasional crashes on the in-stay review page.
