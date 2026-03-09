---
layout: default
title: Version P1.13(1)
has_children: false
parent: Versions
nav_order: 946
---


# Version P1.13(1)

**Released:** Dec 15, 2024

### What's New?

#### <u>New Features</u>

**Pricing — Multiple City Tax Rules:**
- Enhanced support for City Tax multiple rules at both city and property levels.
- With this update, the correct City Tax amounts can be promptly defined and collected as soon as changes are reported by city authorities, ensuring compliance and precision.

**Operations — Multi-Stay Alteration:**
- Enhanced Rentals United integration to support alterations for multi-stay reservations (reservations consisting of multiple stays under one booking).
- This improvement ensures smooth handling of complex reservations and enhances operational efficiency for clustered bookings.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(Bookings)* — an issue was preventing some users from creating bookings when applying valid coupons.
- Fixed *(Booking.com)* — bank-transfer reservations were incorrectly charging guests' credit cards for the prepaid amount.
- Fixed *(Unified Inbox)* — some conversations remained snoozed after their scheduled time. A new job was created to release them.
- Fixed *(Journeys)* — journey messages were being sent to abandoned bookings.
- Fixed *(Unified Inbox)* — the assignee filter was resetting after clicking on the second conversation and onward.
- Fixed *(Digital Keys)* — an issue was preventing the creation of Vauban (Visor) locks. *(hotfix)*
- Fixed *(Quotes)* — quotes were failing to update to "converted" status after booking creation.
- Fixed *(Unified Inbox)* — conversations associated with deleted bookings were still appearing in search results when using the deleted booking ID.
- Fixed *(Hotel Directory)* — users were unable to access the Hotel Directory page, which was displaying a blank screen. *(hotfix)*
