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

#### <u>Additional Updates & Bug Fixes</u>

- Error Creating Bookings with Coupons — resolved an issue that prevented some users from creating bookings when applying valid coupons.
- Booking.com Prepaid Reservation Fix — addressed an issue where bank-transfer reservations were incorrectly charging guests' credit cards for the prepaid amount.
- Some conversations remained snoozed after their time — a new job was created to release snoozed conversations that were stuck in a snoozed state.
- Journey Messages for Abandoned Bookings — fixed an issue where journey messages were being sent to abandoned bookings.
- Unified Inbox Assignee Filter — fixed a bug where the assignee filter would reset after clicking on the second conversation and onward.
- Vauban (Visor) Lock Creation Failure — resolved an issue preventing the creation of Vauban (Visor) locks. *(hotfix)*
- Quote Status Not Updating — fixed an issue where quotes failed to update to "converted" status after booking creation.
- Deleted Booking ID Appearing in Search — fixed an issue where conversations associated with deleted bookings were still appearing in search results when using the deleted booking ID.
- Hotel Directory Page Issue — resolved a problem where users were unable to access the Hotel Directory page, which previously displayed a blank screen. *(hotfix)*
