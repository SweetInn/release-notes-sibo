---
layout: version
title: Version P1.60
has_children: false
parent: Versions
nav_order: 912
release_date: "Nov 08, 2026"
---


# Version P1.60

**Released:** Nov 08, 2026

This release lets guests book a partner's transportation from their app journey. Guests get the partner's booking link for arrival and departure, Sweett earns commission on each booking, and the partner carries the liability for the ride. Users can also now manage service settings in SIBO without contacting tech support.

**External transportation links with commission**
![External transportation links with commission](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1794159074/Release%20Notes/P1.60/externalTransportProvider.jpg)

**Manage service settings in SIBO**
![Manage service settings in SIBO](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1794159181/Release%20Notes/P1.60/siboServicesSettings.png)

### What's New?

#### <u>Website & App</u>

**Transportation:**
- **Book transportation with a partner** — Gives guests a transport option in cities that use an outside partner, booked on the partner's site. One card in Our Services shows the partner's photo, logo, description, and benefits, with a link to book. The card does not ask for flight, passenger, or luggage details, and payment is taken on the partner's site. Cities that handle transport inside Sweett are unchanged.

**Breakfast:**
- **Breakfast before online check-in** — Lets direct guests buy breakfast before check-in, so that sale can happen earlier. Applies in cities that turn off the requirement for completed online check-in. Travel-agent and OTA bookings stay blocked until check-in is complete. The switch is on by default, so nothing changes until a city turns it off.

#### <u>SIBO</u>

**External transportation:**
- **External transportation link** — Gives guests a partner booking link for arrival and departure, and earns Sweett commission on each booking. A city can be set to External with its partner. Guests book on the partner's site, and the partner carries the liability for the ride. Operations no longer arrange those rides with the car service company.

**Service settings:**
- **Service settings in SIBO** — Lets users manage service settings for each city without contacting tech support. Users set transportation, delivery services, stay extension, and breakfast rules. Transportation prices and routes take effect after a save. Delivery price, on or off, free quantity, and delivery window apply to the next order. Stay-extension rules are saved for later, and guest extensions are unchanged. The payment-link lengths are saved, but guests still use today's.

**Breakfast:**
- **Breakfast rules for direct bookings** — Keeps breakfast sales open before check-in in cities that allow it. Users follow the same rule as guests. The breakfast board enables Add only when breakfast can be ordered for that booking.

**Shift and reports:**
- **Shift, break, and file a report** — Keeps shift and reporting work in New SIBO, so users do not need Old SIBO for it. Shift off or on sits in the header, Break appears during a shift, and File a report is in the user menu.

**ChatGPT:**
- **Ask Sibo from ChatGPT** — Answers occupancy, booking, and pickup questions without a SIBO search, and keeps listing photos current. Each user connects their own Sibo account and sees only the accounts they can access. Users can also find a unit and update its photos. A saved photo is sent to Airbnb. New categories appear after you reconnect.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(Website/App)* — On online check-in, the summary check-in day matches the header for guests whose phone is in a US time zone. The time stays the saved time.
- Fixed *(SIBO)* — A missing logo on one city no longer stops journey confirmation emails for other cities.
- Fixed *(SIBO)* — An offline lock code uses the confirmed check-in time, so the code works at the door. A code the lock would reject is not stored as working.
- Fixed *(SIBO)* — After a cleaning is marked done on schedule, the task list shows done even if the property lookup fails, so a finished clean does not stay open. A failed refresh is tried again.
- Fixed *(SIBO)* — Creating a task from a report once leaves exactly one task. A second click while the save is in progress, or before the window closes, does nothing.
- Fixed *(SIBO)* — On the booking page, Check-in Info shows the online check-in status, such as Partial or Completed.
- Fixed *(SIBO)* — On Extra Amenities, the orange tag reads Paid Service, so a priced extra is not mistaken for a charge already paid. Payment state stays on its own line.
- Fixed *(SIBO)* — The account city already chosen stays selected on the next new SIBO page, so users do not have to pick it again.
- Fixed *(SIBO)* — On Edit User, picking a city from a filtered list adds it. Cities already selected stay selected, so a filter does not drop access by accident.
- Fixed *(SIBO)* — Opening the old dashboard address no longer loads the old dashboard.
- Fixed *(SIBO)* — A US affiliate agent can connect a payout city outside France and receive the onboarding link, so that city can pay the agent.
- Fixed *(SIBO)* — New breakfast dates no longer block task updates. The task list stays in step with the saved task.

---
[View original release email](./release-email.html)
