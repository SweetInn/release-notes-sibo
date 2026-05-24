---
layout: version
title: Version P1.30+36
has_children: false
parent: Versions
nav_order: 923
release_date: "May 24, 2026"
---


# Version P1.30+36

**Released:** May 24, 2026

This combined release brings redesigned city and destination pages for better guest discovery and booking conversion, a nearby dates slider to reduce drop-off, an Airbnb extension price breakdown for more guest transparency, self-service Nuki smart lock onboarding for partners, automatic detection and recovery of bookings that fail to complete, and Yes/No question support in checklists.

**Redesigned City (Destination) Page**
![Redesigned City Page](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.30%2B36/cityPage.png)

**Available for Nearby Dates Slider**
![Available for Nearby Dates Slider](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.30%2B36/nearbyDates.png)

**Airbnb Extension — Price Breakdown**
![Airbnb Extension Price Breakdown](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.30%2B36/airbnbExtensionNew.jpg)

**Full Nuki Onboarding Self-Service Flow**
![Full Nuki Onboarding Self-Service Flow](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.30%2B36/nuki_onboarding.png)

### What's New?

#### <u>Website & App</u>

**Destination Discovery:**
- **Redesigned City (Destination) Page** — The city and destination pages on the website and guest app have been fully redesigned. Guests can now explore locations more easily, with clearer information, better search, and a smoother experience to help them decide where to stay.
- **Available for Nearby Dates Slider** — When a guest selects unavailable dates, a new slider highlights listings that are open on nearby dates, keeping guests engaged and helping them find a suitable option without leaving the search.

**Guest App Experience:**
- **Airbnb Extension — Price Breakdown** — The Airbnb extension quote request now includes a full price breakdown, so guests can clearly see what they are paying for before confirming their stay extension.

#### <u>SIBO</u>

**Booking Recovery:**
- **Detect and Recover Bookings That Fail to Complete** — The system now tracks whether all processing steps finish correctly when a booking arrives from a channel such as Airbnb or Rentals United — including saving the booking, syncing to search, creating tasks, and sending guest messages. Any booking that does not fully land is flagged automatically for recovery.

**Bookings:**
- **Allow Authorized Agents to Reduce Booking Security Deposit** — Authorized B2B agents can now lower or remove the security deposit on an existing booking when the guest's situation warrants it. Changes are recorded in the booking log for full transparency. The option is permission-controlled and is locked once a deposit charge or pre-authorization is already in place.

**Checklists:**
- **Yes/No Questions in Checklists** — Checklist creators can now add Yes/No questions to any checklist. Each question can be set as required, so staff must explicitly choose Yes or No before completing a task, ensuring clear and unambiguous answers on inspection and maintenance checklists.

**User Management:**
- **Admins Can Now Filter Users by Permissions** — Admins can filter the users list by specific resource permissions — for example, finding all users who can modify bookings or manage properties. Each permission is shown with a clear name and description to make it easy to understand what access it grants.

**Smart Access:**
- **Full Nuki Onboarding Self-Service Flow** — Partners can now connect their Nuki smart lock account to SIBO on their own using a guided step-by-step wizard. The wizard covers everything from Nuki Web configuration to account authorisation and handles all technical setup automatically — no tech or DevOps involvement needed.

**Property Details:**
- **Room Count Mismatch Warning** — SIBO now shows a clear warning on the Property Details page when the room counts in the property form don't match the actual setup synced to booking platforms, so agents can correct mismatches before they cause sync issues.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Bookings and tasks are now indexed in search ordered by creation date, so the most recent items always appear first when staff search for them.
- Fixed *(SIBO)* — Paid delivery items added through Tasks & Guest Requests incorrectly created the delivery task report with status NEW instead of IN PROGRESS. This has been fixed.
- Fixed *(SIBO)* — Early check-in and late check-out requests on properties with non-standard check-in or check-out times were silently skipped by the nightly cron, leaving guests with no approval or decline. The system now uses each property's own times instead of fixed defaults.
- Fixed *(SIBO)* — Filters applied on the Buildings page were cleared when a user opened and closed a building modal. The page now returns to the same filtered results after closing.
- Fixed *(SIBO)* — A pending payment scheduled for a future date was incorrectly canceled when a staff member updated the guest count on a booking, leaving no outstanding balance. This has been fixed.
- Fixed *(SIBO App)* — The active filters badge on the mobile Reports page showed an incorrect count — it included sort order as a filter, missed team filters, and cleared sort order instead of resetting to default. Staff now see the correct count.
- Fixed *(SIBO App)* — The "Clear All" and "Apply" buttons on the Calendar city filter were hidden behind the Android navigation bar and could not be tapped. This has been fixed.

---
[View original release email](./release-email.html)
