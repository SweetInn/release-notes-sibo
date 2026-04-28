---
layout: version
title: Version P1.28.7+29
has_children: false
parent: Versions
nav_order: 925
release_date: "Apr 28, 2026"
---


# Version P1.28.7+29

**Released:** Apr 28, 2026

**SIBO Mobile App**
![SIBO Mobile App](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%287%29%2BP1.29/new_sibo_app_1.png)

**Service Pay-Links with Offline Payment Reporting**
![Service Pay-Links with Offline Payment Reporting](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%287%29%2BP1.29/paylink_manual_payment_option_1.png)

**Recurring Tasks & Cleanings**
![Recurring Tasks & Cleanings](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%287%29%2BP1.29/reccuring_tasks_1.png)

**Alteration Link Extensions**
![Alteration Link Extensions](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%287%29%2BP1.29/extenstion_alteration_link.png)

**Pricing Change Impact Summary**
![Pricing Change Impact Summary](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%287%29%2BP1.29/pricing_summary_disclaimer_1.png)

### What's New?

#### <u>Website & App</u>

**Online Check-In:**
- **Two-Sided Document Scan in OCI** — During online check-in, guests may be asked to scan both sides of required documents in markets where double-sided validation is required.

**Alteration & Booking Changes:**
- **Pre-Check-In Night Extension for Direct Guests** — Direct guests can extend their stay before check-in, complementing the existing checkout-side extension journey.
- **Booking.com Alteration Coverage Expanded** — Extension links now handle both pre-arrival and in-stay Booking.com extension scenarios.

#### <u>SIBO</u>

**Digital Access:**
- **Digital Keys for Maintenance Tasks** — SIBO now supports end-to-end digital-key handling for maintenance tasks, including key lifecycle orchestration and access visibility for assigned users.

**Direct Sales & Services:**
- **Service Pay-Links with Offline Payment Reporting** — When payment is taken outside the pay-link flow, teams can record the transaction in SIBO after collecting funds through channels like card terminals, bank transfer, or cash.

**Task & Cleaning Management:**
- **Recurring Tasks and Cleanings** — Teams can define recurring schedules and let SIBO automatically generate repeating tasks and cleanings.
- **Planner Configuration Alerts for Cleaning Managers** — The daily planner surfaces missing setup issues directly in context, such as absent default assignees, companies, durations, or costs.
- **Cleaner Activity Tracking** — SIBO records whether cleaning tasks were started or finished manually, triggered by the lock system, or timed out, giving operations teams accurate visibility into field activity.

**SIBO App:**
- **SIBO Mobile App** — SIBO mobile launches with core day-to-day operational capabilities for faster field execution.
- **Push Alerts for Last-Minute Bookings** — Operations teams receive app push notifications for last-minute bookings so they can react quickly.

**Channel Management:**
- **Airbnb Maximum Advance Booking Window** — Data teams can configure how far ahead guests may book Airbnb listings directly from SIBO channel settings.

**Guest Experience & Scheduling:**
- **LCO Auto-Approval Aligned with Maintenance** — Late check-out daily auto-approval now accounts for relevant maintenance tasks to reduce downstream scheduling conflicts.

**Booking Management:**
- **Pricing Change Impact Summary** — Before applying pricing updates, users now see a summary of planned changes and affected properties.

**Property & Unit Management:**
- **Properties and Units Renaming** — Hosts can rename both properties and units so labels shown internally and in guest communication remain accurate after branding or data updates.
- **Default Amenities Set Support** — Accounts and cities can define default amenities that are automatically applied when creating new properties or units.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Availability and price updates to Rentals United now handle accounts that currently have no stored credentials.
- Enhancement *(SIBO)* — SIBO App can now show mandatory blocking updates or recommended non-blocking update prompts based on release policy.
- Enhancement *(Digital Keys)* — Operations teams can now set digital-key access buffers per account and city, replacing the previous single global timing rule.
- Enhancement *(SIBO)* — When Truvi flags a booking, hosts now see in the Insurance card that Damage Protection is capped up to 1,000 EUR.
- Enhancement *(SIBO)* — The alteration finish flow now shows pay-link actions only when unpaid dues exist, while preserving direct sidebar access when payment is required.
- Enhancement *(Online Check-In)* — Check-in and check-out time pickers now animate briefly when opened to make scroll selection clearer to guests.
- Enhancement *(Website/App)* — The website and app no longer load door access data when viewing past bookings, reducing unnecessary requests and related errors.

- Fixed *(SIBO)* — Non-refundable Agoda reservations are now correctly identified so proper cancellation policy behavior is preserved.
- Fixed *(SIBO)* — Minimum-stay-only pricing changes now trigger channel publishing and sync to connected providers.
- Fixed *(SIBO)* — Airbnb bookings now process even when the property is not yet published on the website.
- Fixed *(SIBO)* — Auto-confirmed ECI/LCO entries now show the correct confirmed time instead of an invalid date value.
- Fixed *(SIBO)* — Alteration pay-links are no longer auto-sent to guests unless explicitly intended by staff flow.
- Fixed *(SIBO)* — Booking search results now show the correct status after cancellations that include prior guest ID uploads.
- Fixed *(SIBO)* — The Report action button now stays disabled until all mandatory questions are completed.
- Fixed *(SIBO)* — SIBO Dashboard accommodation filters now include building and unit types in unsold-apartments counts.
- Fixed *(Digital Keys)* — Door-code creation now handles guest names that include invisible special characters from channel sources.
- Fixed *(SIBO)* — Booking adjustments made before payment completion are no longer incorrectly logged as alterations.
- Fixed *(SIBO)* — Paid/Total values on the Bookings page now show zero correctly after full refunds with policy overrides.
- Fixed *(SIBO)* — Canceling paid delivery tasks no longer triggers incorrect refunds and residual booking balances.
- Fixed *(SIBO)* — The Regenerate Admin Code action is no longer exposed on booking lock view where it should not appear.
- Fixed *(SIBO)* — Refund-limit calculations now avoid floating precision artifacts and allow exact remaining-balance refunds.
- Fixed *(SIBO)* — Cancellation refunds now correctly account for earlier partial refunds and return only the true remaining balance.
- Fixed *(SIBO)* — Invoice view now loads properly for bookings that previously returned display errors.
- Fixed *(SIBO)* — Only hotels with active breakfast offerings now appear in the Breakfast Management dashboard.
- Fixed *(SIBO)* — Scheduled installments are now canceled automatically once the full booking balance is paid.
- Fixed *(SIBO)* — Auto-generated inventory checklist sub-types are no longer shown as configurable columns in task settings.
- Fixed *(Digital Keys)* — Smart lock codes for maintenance visits are now revoked automatically when the task is marked done.
- Fixed *(Website/App)* — Checkout instruction copy now shows real lobby hours instead of a placeholder token.
- Fixed *(Online Check-In)* — Online Check-In no longer crashes when guests use browser auto-translation features.
- Fixed *(Online Check-In)* — A second OCI tab submission can no longer overwrite a previously confirmed paid early check-in slot.
- Fixed *(Online Check-In)* — After Damage Protection payment, guests now proceed correctly to the next OCI step without manual refresh.

---
[View original release email](./release-email.html)
