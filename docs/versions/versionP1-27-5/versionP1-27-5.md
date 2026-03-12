---
layout: version
title: Version P1.27(5)
has_children: false
parent: Versions
nav_order: 929
release_date: "Feb 24, 2026"
---


# Version P1.27(5)

**Released:** Feb 24, 2026

This release introduces last-minute Early Check-In & Late Check-Out handling, Custom Breakfast Orders with pay-link, Multi-Calendar improvements, Maximum Length of Stay for channel management, and lobby opening hours consistency across SIBO, Website/App, and guest journeys.

**Last-minute Early Check-In & Late Check-Out**
![Last-minute Early Check-In & Late Check-Out](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.27%285%29/late_check_out_comp_req.png)

**Custom Breakfast Orders**
![Custom Breakfast Orders](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.27%285%29/custom_breakfast.png)

**Quick Access to Booking Actions**
![Quick Access to Booking Actions](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.27%285%29/booking_actions.png)

### What's New?

#### <u>SIBO</u>

**Guest Experience:**
- **Quick Access to Booking Actions** — all actions for a booking (Early Check-In, Late Check-Out, Digital Keys, and more) now live in one menu at the top of the booking details page. No more scrolling to the bottom.
- **Handle Last-Minute ECI and LCO** — provides accurate, immediate responses for last-minute Early Check-In and Late Check-Out requests made from the Booking Details Actions menu.

**Direct Sales & Services:**
- **Custom Breakfast Orders** — agents can create custom breakfast orders per stay date with dynamic pricing per guest and pay-link support.

**Consistency and Reliability:**
- **Lobby Opening Hours Consistency** — standardizes and correctly displays hotel lobby opening hours across SIBO and the website.

**Integrations:**
- **Send Maximum Length of Stay to Rentals United** — syncs the maximum length of stay restriction to Rentals United to enforce booking limits *(currently applied to hotels)*.
- **Rentals United Base-Price Logic Deprecation** — removed deprecated base-price logic; the platform now relies exclusively on explicit nightly pricing for better channel compatibility and accuracy.
- **Fix Booking.com Cancellation Policy Recognition** — ensures Booking.com reservations are assigned the correct cancellation policy for all partners.
- **Fix Rentals United Alterations Reverting After Update** — resolves a timing conflict between API updates and incoming webhooks that could revert booking alterations.

#### <u>Website & App</u>

**Online Check-In and Guest Dashboard:**
- **Handle Last-Minute ECI and LCO** — provides accurate, immediate responses for last-minute Early Check-In and Late Check-Out requests from Online Check-In and the Guest Dashboard.
- **WhatsApp Default Contact Method** — sets WhatsApp as the default contact method in Online Check-In for non-Airbnb guests.

**Consistency and Reliability:**
- **Lobby Opening Hours Consistency** — standardizes and correctly displays hotel lobby opening hours across the website and SIBO.

#### <u>Enhancements & Bug Fixes</u>

- SIBO Multi-Calendar — buildings with single-property units are now flattened to reduce UI clutter and make availability easier to scan.
- SIBO Multi-Calendar — new Specs toggle to hide property attribute icons and free up space for displaying full property names.
- SIBO Multi-Calendar — tooltips are now slightly delayed on hover, preventing them from flashing while moving across bookings or blocked dates.
- Fixed — inconsistent service dates shown to guests in different time zones and locations.
- Fixed — shared or bookmarked links with a trailing slash now load correctly instead of showing errors.
- Fixed — unit pages on the Adama partner website could fail to load and show an error instead of unit details.
- Fixed — mentioning a user in a comment now correctly shares the conversation with them.
- Fixed — invoices incorrectly showed Breakfast included = 0 when breakfast was paid as part of the stay.

---
[View original release email](./release-email.html)
