---
layout: version
title: Version P1.45
has_children: false
parent: Versions
nav_order: 917
release_date: "Sep 01, 2026"
---

# Version P1.45

**Released:** Sep 01, 2026

As part of our ongoing push to grow direct bookings, this release introduces our brand new Agent Area, turning travel agents into a direct booking channel with affiliate-branded links to grow direct sales and deepen partnerships with longtime agents, while making it easy to welcome new ones.

The Operations Dashboard also gets sharper eyes, with new categories for upcoming high-value bookings and unresolved yesterday check-ins, catching risk before it ever reaches a guest. A new live connection status indicator on that same dashboard means you always know its real-time health at a glance.

On Airbnb, guest-initiated alteration requests are now captured and actionable straight from SIBO. And in Roster, managers get an instant push notification the moment a leave request needs their approval.

**New Direct Booking Channel for Travel Agents**
![New Direct Booking Channel for Travel Agents](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1788269615/Release%20Notes/P1.45/agents.png)

**Operations Dashboard New Risk Categories**
![Operations Dashboard New Risk Categories](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1788268827/Release%20Notes/P1.45/newDashboard.png)

### What's New?

#### <u>Website & App</u>

**Agent Area:**
- **A new direct booking channel** — Logged-in travel agents now see TRAVEL ADVISORS ONLY under Reserve once guests and dates are set, giving them a way to share, mark up, and convert stays without ever leaving the property page.
- **White-label access** — Agents copy an affiliate-branded, no-price link or download a brochure PDF for offline quoting, then complete the booking on Sweett.
- **Bookable access** — Agents set a markup on the net rate within their capped share, see the net rate, commission, and client total for Lite and Flex, and copy an affiliate-branded bookable link at that client total. The guest never sees the split.
- **The Stay Selection** — Clients open agent links on The Stay Selection, where they can preview the stay, choose a rate when both are offered, check out, and pay one final price.
- **Payout via Stripe Connect** — After payment, Sweett keeps the net rate and the travel agent receives their commission via Stripe Connect.
- **Guests keep full access after booking** — Guests can find their trip again with Find your reservation (email plus a one-time code), landing on My bookings to complete online check-in and receive journey emails under The Stay Selection branding.

#### <u>SIBO</u>

**Travel Agents:**
- **Affiliate Stay Visibility** — Affiliate stays booked through the new Agent Area now appear as The Stay Selection in the OTA filter, with their own dedicated affiliate journey profile alongside the standard guest journey.

**Operations Dashboard:**
- **Upcoming High-Value Booking Alerts** — The dashboard has a new category for successful high-value bookings checking in today or tomorrow, based on the city's local calendar. Each item shows the booking and enough guest and unit context to act without leaving the list, and a Done button clears the alert for that stay. Cancelled bookings are removed automatically.
- **Yesterday Check-In: Unpaid & Incomplete OCI Alerts** — A new category flags successful bookings that checked in yesterday and still have both incomplete online check-in and an unsettled payment. Items clear automatically as soon as either condition is resolved, or if the booking is cancelled or marked as a no-show.
- **Live Connection Status Indicator** — A compact status indicator next to the dashboard subtitle now shows Live, Reconnecting, or Disconnected, each with its own colour and label. A last-update time appears only in the degraded states, shown in the property's local time, with the full timestamp available on hover. The dashboard keeps showing the last known data while reconnecting, and a manual retry is available once retries are exhausted.

**Roster:**
- **Leave Request Approval Push Notifications** — When a worker submits a leave request that requires approval, their direct manager now receives a phone push titled New leave request, showing the requester's name, leave type, and start and end dates. Tapping the push opens Roster. No push is sent for leave types that do not require approval or when the worker has no direct manager, and approving, rejecting, or cancelling a request does not trigger a push.

#### <u>Integrations</u>

**Airbnb:**
- **Guest-Initiated Alteration Requests** — When a guest submits an alteration request directly in Airbnb, rather than one initiated on their behalf, it is now captured with the requested dates, guest counts, and price impact, and shown as a pending guest request. Agents or the AI chatbot can accept it, confirming the change in Airbnb, or decline it with an optional reason. Already-resolved requests cannot be acted on again.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Added backend support for creating Airbnb Special Offers and Pre-Approvals and for handling Airbnb's related webhooks. This lays the groundwork for upcoming SIBO and AI chatbot tools to send tailored offers directly to guests.
- Fixed *(SIBO)* — Changing Rows per page (e.g. to 50) on Double Booking and other new SIBO tables reverted to 10 rows and an incorrect page count after an action such as confirming a stay. The selected page size is now preserved.
- Fixed *(SIBO)* — Delivery reports created by the AI chatbot for missing amenities used a generic title and description, forcing the local operations team to open the guest chat to see what was requested. Reports now include the specific item(s) and quantities the guest asked for.
- Fixed *(Website/App)* — On old white-label booking sites, the accessibility widget was visible but did not open when clicked. Accessibility tooling is restored for guests.

#### <u>What's Coming Next</u>

- Manage Customer Agents (SIBO) — A dedicated SIBO page for staff to create and manage customer agents, so agent setup no longer has to be handled directly by the team.

---
[View original release email](./release-email.html)
