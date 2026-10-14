---
layout: version
title: Version P1.50
has_children: false
parent: Versions
nav_order: 915
release_date: "Oct 13, 2026"
---


# Version P1.50

**Released:** Oct 13, 2026

This release puts the apartment that fits the search first on the city page, lets operations set who can be sent where, and asks guests to reschedule when they are not home for a visit.

City page ranking puts the right apartment in front of the right guest. The cards stay the same. The order changes with the search: two guests see a place that sleeps two before a place that sleeps six. Switch a city on, and Recommended leads with the best match. Leave it off, and guests keep today's list.

Technician coverage shows who can reach every building, hotel, and apartment in the city, and where a skill runs out. Assign the right person before a task is left waiting.

The guest picked the time slot. The technician arrives, and nobody opens the door. One tap on Guest not home now messages the guest to choose a new time. The visit is rebooked without anyone writing that message by hand.

**Smarter city-page ranking**
![Smarter city-page ranking](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1791904751/Release%20Notes/P1.50/cityPageRankings.png)

**Technician Coverage**
![Technician Coverage](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1791904751/Release%20Notes/P1.50/techCoverage.png)

**Guest Not Home**
![Guest Not Home](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1791906661/Release%20Notes/P1.50/guestNotHome.png)

### What's New?

#### <u>Website & App</u>

**Online Check-In:**
- **Late Arrival** — Guests arriving after midnight can say so, and the arrival is saved on the day they actually arrive. Late arrivals now have two clear options: 11 pm - midnight on the check-in day, or after midnight on the next day, with an approximate hour up to early morning. Paid early check-in and check-out stay the same.

**Guest App:**
- **Luggage Storage** — Every guest sees where to leave their bags, from arrival through the stay. With a Sweett Lobby, Arrival Instructions show the Lobby card, then Stasher. With no lobby, the section shows only Stasher. The Home screen keeps a tile before and after check-in: Luggage Storage & Lobby, or Luggage Storage when there is no lobby. Tapping it opens the same cards. The Lobby card still opens the Sweett Lobby. Stasher opens in the browser. If neither is available, the section and the tile stay hidden.

#### <u>SIBO</u>

**City Page Ranking:**
- **Search fit** — City search results are now ordered for the search the guest just made. Party size, bedrooms, and how fast a listing is booking all count. Two guests see a place that sleeps two above a place that sleeps six. A one-bedroom request leads with a one-bedroom.
- **Varied top results** — The top results stay varied, so they are not all hotels, all the same size, or several cards from the same building. Price sort is unchanged, and the guest still sees the same cards.
- **Rules by city** — Teams manage the rules by city in Settings. Each account saves score presets that add up to 100%, and turns each city on or off. Off keeps today's list. On uses one preset. A selected building or apartment, or a newly launched listing, can be promoted into third position for a limited time.

**Technician Coverage:**
- **Who Can Be Sent Where** — Maintenance technicians can now be tied to the buildings and properties they actually work in. A technician with no assignment can be sent anywhere in the city. Assigning one or more locations narrows them to those locations, and automatic task assignment applies that before zones, so it acts as a firm rule rather than a preference. Assigning a building, hotel, or virtual building covers every property inside it. Two views answer the two questions ops asks: who can be sent to this address, and where can this technician go. A banner flags any skill whose only holders have been tied to specific locations, so a coverage gap is visible before a task fails to find anyone.
- **What ops can do now** — Keep a technician on the buildings they know; see at a glance who is eligible at any address; check where any one technician can be sent; spot a skill that has been accidentally confined to one part of the city; and undo it, since removing the last location puts a technician back to working anywhere.

**Guest Visits:**
- **Guest Not Home** — Some maintenance visits need the guest to be in the apartment, so the guest chooses a time slot for the technician to come. If nobody answers during that time slot, the technician selects Guest not home. SIBO then closes the task, reopens the report, and adds a comment saying that the visit needs to be rescheduled manually. The guest receives a WhatsApp message explaining that they were not home during the agreed time slot and asking them to choose a new time. Visits that do not need the guest to be present are not affected.

**Auto Tasks:**
- **Automation Settings** — Cities that have not been changed keep today's behaviour. The search area is one choice: assigned properties only, the property's zone, or the whole city. In HITM (Human in the middle), the city names which technicians may receive a proposal. Task length is a small set of named options for the city. Open these settings from Reports or from the existing city settings. When more than one account city is available, the screen shows which one is being edited. A change in one place shows in the other.

**Smart Locks:**
- **Reconnect the Bridge** — If a cleaner is on site when a Nuki bridge goes offline, they get a push notification and can mark the bridge reconnected on the cleaning task. If nobody is there, or the bridge stays offline, the maintenance report and task are still created.

**Operations Dashboard:**
- **One-Night No-Show** — On checkout morning, a one-night booking with no check-in gets a No-show watch alert, tagged One night booking, and listed first. The guest checked-in only removes the alert. Mark as no-show asks for confirmation, then sets the booking to No-Show, marks the apartment clean, and clears the alert.

**Affiliate Program:**
- **Membership Price** — When the stay shows the membership option, the price before markup is the membership price. The agent's markup is added on top, up to their maximum. The guest is not given the membership discount a second time. The total the agent sees matches the shared link. Stays without the membership option are unchanged.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Group bookings are now possible on Israel cities, on the website and from a SIBO multi quote. The guest pays once, and every apartment in the group is confirmed.
- Fixed *(SIBO)* — A successful card payment was later shown as failed after an earlier card on the same payment was declined. The stay stayed confirmed, but the amount looked unpaid and Charge Now was still offered. The successful payment now stays successful.
- Fixed *(SIBO)* — A missing door code was not flagged on the New Dashboard when another lock on the same apartment, such as a static gate code, was already saved. Each lock is now checked on its own, so a guest is not left without a working code.
- Fixed *(SIBO)* — Check-in, cleaning, and breakfast tasks were not created when the booking currency differed from the city currency. Those tasks are now created as usual.
- Fixed *(SIBO)* — Filing a report in the SIBO App could save it under another account in the same city. The report, and any task created from it, now stay on the account that manages the apartment.
- Fixed *(SIBO)* — A task could only be assigned to people whose main account matched the franchise account. People with access to that city can now be assigned, including on Sweett and La Quintinie.
- Fixed *(Website/App)* — A same-day check-in reminder was sent late at night and opened with "Good morning!". A reminder whose morning window has already passed is no longer sent, and the greeting matches the local time of day.
- Fixed *(Website/App)* — "Arriving before 2 PM?" stayed visible on check-in day after that time had passed. The link is hidden once that time has passed. The same rule applies to the late check-out link.
- Fixed *(SIBO)* — On iPhone, opening a booking from Multi Calendar or Reports left no way back, and tapping the menu again stayed on that booking. There is now a way back to the calendar or the reports list, with the previous filters kept.
- Fixed *(SIBO)* — A maintenance task for a building and a common area showed a blank location in the SIBO App. The task card and the task details now show the building and the common area, as Back Office already does.
- Fixed *(SIBO)* — The Check In date on Bookings moved back a day for people whose computer time zone is behind UTC. The selected day now stays the day that was clicked.
- Fixed *(Website/App)* — On hotel pages, the guest count opened misaligned and cut off when dates were still empty. The guest count now lines up with the search bar, and Adults, Children, and Infants are fully visible.
- Fixed *(SIBO)* — Inactive agencies filled the agencies list, so some active agencies were missing. The list now returns active agencies.

---
[View original release email](./release-email.html)
