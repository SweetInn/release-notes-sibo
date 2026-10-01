---
layout: version
title: Version P1.47
has_children: false
parent: Versions
nav_order: 916
release_date: "Oct 01, 2026"
---


# Version P1.47

**Released:** Oct 01, 2026

This release introduces updates across sales, operations, and Roster, so more of the daily work can be done directly in SIBO.

Multi-booking quotes let sales agents offer several apartments together in one quote, and the guest pays for all of them in a single payment.

Operations teams can now manage zones and technician coverage on a map, directly in Roster, without asking R&D to make changes.

Each city can set an Automation mode for Auto Tasks: Manual, HITM, or Full auto. With HITM, the system suggests the assignment and a manager approves or declines it before the task is created.

Damage Waiver settings are now managed from SIBO, per city and per apartment. Each city has a Sibo package and a Truvi package, and you choose how it is offered to guests. For Sibo, price policies set the guest price per night. For Truvi, the package total is the guest price. For one apartment or several, you can turn it off, choose the provider, or set a different price.

And Roster receives a round of improvements requested by operations, including hourly time off, clear leave balances, and shift start and end for all employees.

**Multi-Booking Quote**
![Multi-Booking Quote](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1790886393/Release%20Notes/P1.47/multiBookingQuote.png)

**Roster Zones and Technicians**
![Roster Zones and Technicians](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1790886394/Release%20Notes/P1.47/rosterZones.png)

**Auto Tasks: HITM**
![Auto Tasks: HITM](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1790886726/Release%20Notes/P1.47/taskAutomationSettings.png)

**Damage Waiver Settings**
![Damage Waiver Settings](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1790886392/Release%20Notes/P1.47/damageWaiverUi.png)

### What's New?

#### <u>Direct Bookings</u>

**Multi-Booking Quote:**
- **Two or more rooms** — Searching a quote for two or more rooms now returns apartment combinations, using the same logic as the city page.
- **Group option** — A combination can be saved on the quote as a group option, next to the usual single-apartment options. The guest chooses one option and pays once. A booking is created for each apartment, and the bookings stay linked together.
- **Unavailable apartment** — If one apartment in the group is no longer available, the whole group option is hidden. Coupons do not apply to group options.

#### <u>SIBO</u>

**Services:**
- **Damage Waiver Settings** — In Settings, Services, each city has a Sibo package and a Truvi package, and you choose how Damage Waiver is offered to guests. For Sibo, price policies set the guest price per night. For Truvi, the package total is the guest price. For one apartment or several, you can turn it off, choose the provider, or set a different price. Reset returns the apartment to the city settings.

**Maintenance Automation:**
- **Auto Tasks: HITM** — In Reports, each city has an Automation mode: Manual, HITM, or Full auto. With HITM, the system does not create the task right away. The report shows a suggestion: the technician, the time, why this technician was chosen, and how long the suggestion has been waiting. Approve creates that task. Decline needs a reason from the list, and the system does not suggest again for that report. If the proposed time has already passed, or the technician was booked into that slot while the suggestion was waiting, no task is created and the manager is asked to assign it manually. The system does not look for another time. Every decision is saved on the report. Technicians see their tasks as usual.

**Zones:**
- **Zone Settings** — Roster, Settings, Zones lists every zone, how many apartments it includes, which zones it overlaps, and which apartments are outside all zones. A zone is created by drawing it on the map and then naming it. Redrawing shows which apartments will move in or out before saving. A boundary that crosses itself cannot be saved. When zones overlap, the smaller zone owns the shared apartments, and the screen says so. Zones can be renamed, deactivated and reactivated. They cannot be deleted. Deactivating states how many technicians and apartments are affected.
- **Technician Coverage** — A new Technician coverage tab in Roster has two parts. Zones shows the city map and the maintenance technicians on each zone. A technician with no zone covers the whole city, including addresses outside every zone. Removing their last zone asks for confirmation, because that widens their reach. Properties assigns buildings and standalone apartments. The first property assignment limits that technician to those places. A skill view colours the map by one maintenance skill and shows how many zone and skill pairs have nobody available, out of the total. How tasks are assigned does not change.

**Operations Dashboard:**
- **Today's and Tomorrow's Deliveries** — Two new cards on the Critical tab, Today deliveries and Tomorrow deliveries, count open delivery tasks. Today shows the next delivery time. Tomorrow shows the first one. Opening a card shows the list (time, apartment and assignee) with links to the task and the report. There are no action buttons. Deliveries scheduled before today are not on these cards.

**Cleaning and Availability:**
- **Early Check-Out During a Stay** — When a guest who is already staying moves their check-out to an earlier date, SIBO now handles it like a cancellation during the stay. The unused nights are blocked, a cleaning is scheduled for the next morning, and the apartment becomes available again once it is clean and ready. Date changes before arrival are not affected.

**Roster Improvements:**
- **City Employee Lists by Office** — Each person now has an Office (HQ or a city). City employee lists and pickers show only the people whose Office is that city. Team members with access to the city can still open and use its Roster.
- **Multiple Teams of the Same Type** — A city can now have more than one team of the same type, for example two Maintenance teams, each with its own name.
- **Leave Balances** — Leave days earned, used and remaining are now shown for each leave type in the employee list, when approving a request, and in the employee's own overview. Partial days are supported, for example 2.33 days per month in Milan.
- **Time Off in Hours (Permessi)** — Employees can request time off for part of a day. Once approved, those hours are blocked on the planner and no shift can be assigned during them.
- **Festive Compensation Day** — Managers can add a festive compensation day on the planner. No shift can be assigned on that day, and the employee's leave balance does not change.
- **Manager-Added Leave** — Managers can add leave for team members directly from the planner. The leave is approved as soon as it is saved.
- **Approved Leave on the Planner** — Approved leave now appears on the planner as a coloured bar, so people on leave no longer look available.
- **Leave Overlap Warning** — When leave is requested or approved, a warning appears if teammates are already off on the same dates.
- **Bulk Edit and Delete Shifts** — Managers can select several shifts on the planner and edit or delete them in one action.
- **Start and End Shift for All Employees** — Any employee with a planned shift can now start and end their shift in the SIBO App. Their hours appear in Time Tracking.
- **Clock-In and Clock-Out Location** — Time Tracking now shows the location of each shift start and end, with a link to view it on a map.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — When a guest asked to be home for a maintenance visit, technicians can now choose Guest not home during the agreed time window. A comment is added automatically, so the team knows the visit needs to be rescheduled.
- Fixed *(SIBO)* — The breakfast total for direct bookings included city tax (for example 12.00€ per day but 20.45€ total). The total now matches the daily price multiplied by guests and days.
- Fixed *(SIBO)* — The Resolved By column in Double Booking History always showed 00:00. It now shows the actual local time.
- Fixed *(SIBO)* — The Online Check-in column in Double Booking showed Not started for bookings already in Partial status. It now shows the booking's actual status.
- Fixed *(SIBO)* — The Relocate option in Double Booking suggested apartments that were already occupied. Only apartments that are free for the whole stay are now suggested.
- Fixed *(SIBO)* — Bookings that could not move back from a dummy apartment were still marked as Stay Confirmed. These bookings now stay open, so the team can relocate them.
- Fixed *(SIBO)* — The Tasks in progress card on the Operations Dashboard kept showing reports that were already resolved. Resolved reports are now removed.
- Fixed *(SIBO)* — The Lock issue card on the Operations Dashboard kept showing bookings that had already checked out. Lock issues are now removed once the stay is over.
- Fixed *(SIBO)* — Manage Tax Rules showed only the first 60 properties of a city. All properties of the selected city are now listed.

---
[View original release email](./release-email.html)
