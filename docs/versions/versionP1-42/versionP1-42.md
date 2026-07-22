---
layout: version
title: Version P1.42
has_children: false
parent: Versions
nav_order: 919
release_date: "Jul 21, 2026"
---

# Version P1.42

**Released:** Jul 21, 2026

This release turns cancellation risk into opportunity. The new Overbooking Management feature runs a cancellation risk calculation on specific bookings and, when the risk is high enough, safely opens those dates back up so another guest can book the same stay — built in collaboration with our BI team, who developed the model behind it.

Cleaners and managers also get a proper home for left-behind items with Lost & Found, so nothing gets lost in a side chat again.

On top of that, sales phone numbers now show up right on the web headers, adapted per locale, making it easier for guests to reach the team. And in the Back Office, Nuki lock admin codes can now be viewed, set, and regenerated in just a couple of clicks.

**Overbooking Management (Cancellation Risk Based Availability)**
![Overbooking Management](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1784641426/Release%20Notes/P1.42/doubleBooking.jpg)

**Direct Sales Phone Numbers on Web Headers**
![Direct Sales Phone Numbers on Web Headers](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1784641425/Release%20Notes/P1.42/directSales.jpg)

**Lost & Found**
![Lost & Found](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1784646160/Release%20Notes/P1.42/lostAndFound.jpg)

### What's New?

#### <u>SIBO</u>

**Overbooking Management (Cancellation Risk Based Availability):**
- **Risk-based availability** — SIBO runs a cancellation risk calculation on specific bookings, and when a booking's risk is high enough, it can open its dates so another guest can book the same stay. The original booking is never cancelled, it stays live and is simply hidden from the calendar so it isn't double counted.
- **Safety gates** — if a stronger signal confirms the stay, like a guest message, the dates close immediately to avoid a conflict. If the risk score drops over time instead, the chances of the original booking sticking around go up, which may call for relocating whichever booking was added in the meantime.
- **Conflict dashboard** — when a conflict does happen, a dedicated dashboard shows everything needed to relocate, upgrade, or refund the affected guest, plus a notification so nothing is missed.
- **BI collaboration** — built in collaboration with our BI team, who developed the cancellation risk model behind this feature.

**Lost & Found:**
- **Report from mobile** — cleaners can report a found item from their phone with a photo and note, and the item is linked to the property and booking automatically when possible.
- **Central tracking** — managers get a single list of found items with filters, storage location, and guest contact, and can track each item through to return or disposal.
- **Visible to support** — support can see found items for a booking directly in the Unified Inbox.

**Create Report for Non-Cleaner Staff:**
- **General report entry point** — non-cleaner field staff, such as maintenance technicians, can now create a report directly from the SIBO mobile app using the same simple flow cleaners already have (description and photo), with no cleaning task required.

**Direct Sales Phone Numbers on Web Headers:**
- **Localized numbers on the web header** — direct sales phone numbers are now displayed on the web header, adapted per locale so guests in each region see the right number, giving guests a quick way to call the team.

**Nuki Lock Admin Code Management:**
- **View, set, or regenerate** — from the property's Digital Keys panel, staff can now view, set, or regenerate the admin code for a Nuki lock in a single action.
- **Guest-safe** — the admin code is marked "Do not share" and is only ever visible internally, never to guests.
- **Change protection** — repeated change requests on the same lock are held while a previous change is still applying, so the current state is always clear.

**More Resilient Lock Syncing:**
- **Automatic pruning** — if access to one building is lost, it is automatically removed so it doesn't get stuck or block syncing.
- **Isolated failures** — if a single building fails to sync, the rest continue as normal, with a clear reason reported for whichever building didn't sync.

#### <u>Website & App</u>

**Website Speed Improvement (Phase 2):**
- **Faster pages** — the second phase of ongoing work to make the booking website load and respond faster across key pages.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Failed booking payment logs (cases where a card was charged but the booking wasn't created) are now visible on the Missing Bookings page, with manual and automatic refresh, to help investigate and resolve them faster.
- Fixed *(SIBO)* — Sending a message in a conversation could, in rare cases, deliver an old, unrelated draft instead of the message the agent actually typed. This now always sends the correct message.
- Fixed *(SIBO)* — Reports created from a cleaning task in the SIBO mobile app now correctly show the related property and booking on the report details page.
- Fixed *(Website/App)* — Guests could select more people than a room's maximum capacity when editing trip details, letting bookings go through with too many guests. Guest counts are now capped to the room limit.

---
[View original release email](./release-email.html)
