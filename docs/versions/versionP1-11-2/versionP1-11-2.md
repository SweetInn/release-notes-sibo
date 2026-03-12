---
layout: version
title: Version P1.11(2)
has_children: false
parent: Versions
nav_order: 950
release_date: "Aug 25, 2024"
---


# Version P1.11(2)

**Released:** Aug 25, 2024

### What's New?

#### <u>Website & App</u>

- New Payment Methods: Google Pay and Apple Pay.
  - Available in the booking flow and pay/deposit links.
  *(Apple Pay currently has an open issue with Stripe, but will start working soon)*

#### <u>Online Check-In</u>

**Who's Coming step:**
- Info reader enhancement — improved document and image scanner to identify more date formats, reducing the time and frustration for guests when filling in the form.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(Online Check-In)* — some unique cases were allowing guests to secure an early check-in or late check-out without paying.
- Fixed *(Digital Keys)* — access time was showing the guest's early check-in unconfirmed request as confirmed.
- Fixed *(Booking engine)* — some reservations were showing a different status than actual in the bookings search screen.
- Fixed *(Booking engine)* — some cancelled reservations were still appearing in the multi-calendar.
