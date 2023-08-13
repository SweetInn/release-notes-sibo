---
layout: default
title: Version 42
has_children: true
parent: Versions
nav_order: 2.6
---


# Version 42

### What's New?

#### Operations Platform
- Introduced a fresh deposit capture procedure.[See more...](./depositFlow/depositFlow.md)
- Now featuring a maintenance task summary to gather details about tasks completion.

#### Unified Inbox
- Whatsapp chatbot now sends messages with button options, replacing the old numbered lists.

#### Services
- For altered bookings, paid early check-ins are shifted to the new date if possible. Alerts are displayed otherwise.
- Likewise, for altered bookings, paid late check-outs are adjusted to the new date when feasible. Alerts will pop up if not possible.

#### Journeys
- Guests now receive notifications for both approval and denial of free late check-out requests.
- Guests are also informed when their free early check-in requests are approved.

### Enhancements

#### Users
- Removed restrictions on the number of accounts and cities each user can have.

#### Unified Inbox
- Chatbot now identifies booking IDs even within sentences.

#### Website
- The "Set Arrival Time" option in the OCI form is concealed if check-in is within 24 hours. An advisory note is displayed instead.

#### Guidebooks
- Categories are automatically selected upon local tip creation by users.
- Hidden inactive elements during guidebook creation or editing.

#### Operations Platform
- Task reports now display both descriptions and associated images.

### Bug Fixes

#### Operations Platform
- Fixed the dysfunctional link in the report when the task pertains to cleaning.

#### Pricing Tool
- Resolved the issue where the BI system didn't update the early check-in or late check-out prices for booked/blocked nights.

#### Multi-Calendar
- Addressed the issue with multiple property blocking functionality.
- Corrected the timing error for blocks with auto-release.
- Fixed the display error showing reservations a day early on mobile for users in different time zones.

#### Journeys
- Resolved instances where certain journey messages weren't re-scheduled upon alteration of a booking.

#### Cleaning
- Cleaning costs settings now reflect the correct currency based on city.

#### Unified Inbox
- Chatbot no longer responds with "undefined" when users end their messages with a period sign.
- Information is now appropriately logged in the unified inbox dashboard when the chatbot transfers conversations to live agents.

#### Booking
- Mended the check-in readiness status display issue on mobile.
- Resolved the issue where the estimated departure time remained unconfirmed when it matched the default property time.

#### Rules
- Fixed crashes encountered while creating or updating rules.

#### Invoices
- Dubai invoices now correctly display the UAE Dirham, instead of Euros.

#### In Stay Review
- Addressed occasional crashes on the in-stay review page.

