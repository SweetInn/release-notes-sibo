---
layout: version
title: Version P1.55
has_children: false
parent: Versions
nav_order: 913
release_date: "Oct 25, 2026"
---


# Version P1.55

**Released:** Oct 25, 2026

This release marks a major step forward in AI-powered operations, cleaning quality control, and operational automation. The AI Cleaning Supervisor can inspect a cleaning from the photos before it is marked done, reducing the need for physical supervision.

**AI Cleaning Supervisor**
![AI Cleaning Supervisor](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1793034165/Release%20Notes/P1.55/aiCleaning.jpg)

**Daily breakfast board**
![Daily breakfast board](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1793031924/Release%20Notes/P1.55/breakfastDashboardOps.jpg)

### What's New?

#### <u>Website & App</u>

**Breakfast ordering:**
- **One page for this stay** — Included breakfast and a one-day breakfast for today or tomorrow share one page, based on what is available for the booking at the time of order. When only one breakfast can be ordered, the page shows that breakfast alone.
- **Guest count** — A one-day order can cover up to the guest count plus 2. On checkout morning, guests can still order while a one-day breakfast is available. The choice follows the stay and the breakfast cutoff.

#### <u>SIBO</u>

**AI Cleaning Supervisor:**
- **Photo inspection** — A city chooses when to switch this on. The cleaner photographs the work, gets feedback on what still needs attention, and the task is done when every space passes inspection. Until a city switches it on, a cleaning is still completed by tapping Start and Finish. Supervisors spend their time on the exceptions.
- **Cleaning Performance** — Guest reviews on Airbnb, Booking.com, and NPS become one score from 1 to 5 for each cleaner, so the inspection and the rating tell the same story. The company score is the average of its cleaners. Managers see top performers, who needs attention, who improved most, and who is declining. Past reviews are already included. In-stay reviews are not included yet.

**Daily breakfast board:**
- **Paid and still to pay** — Each order holds the day, so the team can serve what is paid and collect what is not. The older breakfast list in SIBO still shows paid breakfasts only.
- **Add another breakfast** — Staff search by room and show a QR code, and the guest scans it to add more breakfasts.

**Guest timing and automatic tasks:**
- **Guest availability** — During a stay, battery and connection problems follow one path. The guest says when they can be there, and the visit is set from that answer.
- **Automatic tasks** — When the report is ready to schedule, the task is created on its own. A report still waiting for the guest waits until they reply. Teams work these from the Reports queue.

**Partner quotes:**
- **Create and send** — A partner can create a quote, update it, and send it. This covers the Partner API and the private SIBO connection.
- **Authorized discounts** — A price change, as a percent, a fixed amount, a coupon, or a new total, needs permission to apply a discount. Listings, reservations, and business reports are not part of this access.

**Extra services on the booking:**
- **From the booking** — Extra Amenities brings together the guest breakfast link, a custom breakfast booked by staff, and paid early check-in and late check-out, with the price and the pay link.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(SIBO)* — Already Paid now changes only when the money was actually returned. A PayPal refund stays pending until it succeeds or fails, and the payment date is the time of the refund.
- Fixed *(Website/App)* — Guests on a group checkout can no longer pay after the hold has ended. The page uses the same 9-minute timer as a single booking.
- Fixed *(Website/App)* — On the Sweett app, a new guest can finish creating an account from Login. Submitting the form creates the account and moves them on.
- Fixed *(SIBO)* — Staff can open extra services on a confirmed booking even when the guest email is still not set.
- Fixed *(SIBO)* — The stay on Create Booking keeps the dates chosen on the multi-calendar, so the nights booked match the nights selected.
- Fixed *(SIBO)* — Managers see the real workload for every cleaner, and the company total includes them all.
- Fixed *(SIBO)* — Cleaning Time and Cost in Cleaning Manager stay saved, including on a bulk save.
- Fixed *(SIBO)* — On the Operations Dashboard, the Cleanings window keeps the size it opened at when a filter shows fewer cards.
- Fixed *(SIBO)* — Staff can close a report as a duplicate, including when another report is waiting for the guest.

---
[View original release email](./release-email.html)
