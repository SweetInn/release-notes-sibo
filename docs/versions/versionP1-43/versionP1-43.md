---
layout: version
title: Version P1.43
has_children: false
parent: Versions
nav_order: 918
release_date: "Aug 20, 2026"
---


# Version P1.43

**Released:** Aug 20, 2026

This release is all about smoother stays for groups and clearer days for city teams. We are launching Multi-Room Booking: one search, one checkout, and one payment for multiple rooms or apartments, so guests no longer risk losing the next room while confirming the first.

Our new Operations Dashboard also brings the most urgent operational issues into one live command center, so staff can act before guest arrival or in-stay problems escalate.

Unified Inbox also gets smarter with per-account AI bot modes and the ability to attach files when composing a new email, while Double Booking now lets you filter across multiple accounts without losing control of Risk Hold Settings.

We also tightened Overbooking Management, leave and holiday handling in Roster, and a few website booking edges that were getting in the way. And as always, we've been busy behind the scenes tightening up stability and squashing bugs across SIBO, Cleaning Manager, and the website.

**Multi-Room Booking**
![Multi-Room Booking](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1787229236/Release%20Notes/P1.43/multiBookings.jpg)

**Operations Dashboard Command Center**
![Operations Dashboard Command Center](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1787228681/Release%20Notes/P1.43/opsDashboard.jpg)

### What's New?

#### <u>Website & App</u>

**Multi-Room Booking:**
- **One search, one checkout, one payment** — guests can now book multiple rooms or apartments in a single transaction directly on our website.
- **The problem it solves** — until now, booking more than one room meant completing separate bookings one at a time. By the time the first booking was confirmed, the second room might already be gone, so many guests went to OTAs instead. Corporate coordinators booking for a team had to enter payment details and manage confirmations separately for every room.
- **Book multiple rooms in one go** — select all the rooms you need in a single session, with no risk of losing availability between bookings.
- **One checkout, one payment** — enter payment details once regardless of how many rooms you're booking.
- **One confirmation** — a single booking reference covering all rooms, making it easy to manage and share.
- **Peace of mind** — all rooms are held together and confirmed simultaneously, so there's no race against availability.
- **Who benefits most** — families needing two or more rooms, corporate coordinators booking for teams of any size, and group travelers such as friends, wedding parties, and event attendees who need multiple units in the same property or area.
- **Why this matters for direct bookings** — every booking made directly on our website avoids OTA commission entirely. Multi-room bookings are exactly the high-value reservations that were previously lost to OTAs because our website couldn't handle the need.
- **The result** — a faster, simpler, and more confident booking experience for anyone needing more than one room, with more direct bookings and less commission paid to third parties.

#### <u>SIBO</u>

**Operations Dashboard:**
- **Real-time command center** — we're introducing the Operations Dashboard, a real-time command center for city ops teams, available on desktop, mobile, and wall-mounted screens.
- **The problem it solves** — until now, ops teams had to manually navigate across multiple screens every day to find issues, prioritize them, and figure out what to do. Critical problems, a guest locked out, a cleaning running late, an angry in-stay guest, were often discovered too late, handled in the wrong order, or missed entirely.
- **What changes for ops teams** — every critical issue across all 500+ units is now surfaced automatically, in one place, ordered by urgency. No navigation. No hunting. No guessing what to do next.
- **Dramatically less time spent on triage** — issues are prioritized automatically so ops staff always know what to handle first.
- **Faster response to guests** — problems are visible the moment they occur, not after someone happens to find them.
- **Suggested actions on every alert** — the dashboard tells you exactly what to do and gives you the tools to do it in one tap.
- **Automatic guest and cleaner communication** — WhatsApp messages to cleaning company managers fire automatically on cleaning issues; guest messages are pre-templated and ready to send.
- **Nothing falls through the cracks** — unresolved critical issues escalate automatically and notify the city manager, so no alert goes unnoticed.
- **Full visibility on in-stay guests** — mood, VIP status, unanswered messages, and survey scores are visible at a glance, enabling proactive guest recovery before a bad review is written.
- **Desktop** — full detail per issue type, drill down to individual units, claim and resolve in one place.
- **Mobile** — prioritized list with push notifications, deep-linking directly to the relevant alert.
- **Critical alerts covered** — guest no-show watch, cleaner running late, cleaning projected to finish after check-in time, locks with critically low battery, lock codes not generated, incomplete OCIs on arrival day, guests that should have checked out but are still inside, low in-stay review scores, stuck reports and tasks, unanswered messages sent by guests, and bookings cancelled in-stay.
- **The result** — ops teams spend less time looking for problems and more time solving them. Guests get faster responses. Issues that used to sit unnoticed for hours are now resolved in minutes.

**Overbooking Management:**
- **Double Booking multi-account filter** — the Double Booking account field now supports multi-select with search and removable chips. Apply filters the view to all selected accounts. Settings opens Risk Hold Settings for one account at a time, with a static label for a single selection or an account switcher limited to the currently selected accounts when multiple are chosen.

**Unified Inbox:**
- **Per-account AI bot mode (Classification-only)** — each account can be set to No bot, Basic, AI Classification only, or Full AI. Behaviour follows the account that owns the booking, even when the message arrives through a shared inbox. In Classification-only mode, the assistant verifies the booking, selects the relevant SOP, and escalates to a human with no guest-facing reply, including an internal note with the SOP name and code plus the booking verification result.
- **Compose email attachments** — when composing a new Email, agents can add one or more file attachments with the same behaviour as an email reply (multiple files, 16 MB total, upload progress, remove before send). WhatsApp compose is unchanged.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — In Overbooking Management, the list now defaults to shortest time remaining before a booking becomes non-refundable, so the most urgent cases appear first. Staff can also click the Non-Refundable column header to sort ascending or descending.
- Enhancement *(SIBO)* — In Overbooking Management, the relocation tool only proposes apartments that can accommodate the original booking's full guest composition (adults, children, and infants). Units below guest capacity are excluded so ops cannot relocate into an undersized apartment.
- Enhancement *(SIBO)* — In Overbooking Management, when cancellation risk drops below the account threshold, the stay is confirmed and the booking moves to History. Ops no longer see low-risk bookings stuck on the Double Booking Current tab after the calendar hold is released.
- Enhancement *(SIBO)* — On Overbooking Management (Double Booking), the selected Rows per page value is preserved after table actions such as Confirm stay. The number of rows rendered and pagination now stay aligned with the chosen page size.
- Enhancement *(SIBO)* — In Roster / My Shifts, public holidays inside a leave request do not consume leave balance. When a public holiday falls on a weekend, employees receive a substitute day added to their leave allowance, without double-granting on calendar re-sync. Balances in Time Off reflect the updated entitlement.
- Enhancement *(SIBO)* — In Roster / My Shifts, leave entitlement can accrue or prorate from the employee start date (for example BCN at 2 days per month). Mid-year hires receive the correct entitled days automatically in Time Off, without a manual override. Full-year employees still receive the full annual entitlement, and employee leave overrides remain available for exceptions.
- Enhancement *(SIBO)* — Shows a small badge on the Roster menu item with the number of pending, approval-required leave requests from each manager's direct reportees.
- Fixed *(Website/App)* — On the website city page, search results for a selected date range showed almost the entire city inventory as available, even when those dates were not free. Results now align with Back Office availability for the same city and dates.
- Fixed *(Website/App)* — On the quote conversion booking path, when membership was ON and a guest applied a higher coupon, pricing incorrectly stacked the membership discount and then applied the coupon on the reduced price. Only the highest discount applies across quote discount, membership, promotion, and coupon.
- Fixed *(Website/App)* — On the website create-reservation flow entered via a quote, the promo code input was disabled while the Sweett Plus toggle was OFF. The promo code field now stays enabled regardless of membership toggle.
- Fixed *(SIBO)* — In My Shifts → Time Off, when a leave type was untracked/unlimited and pending requests existed, switching the type to tracked (or cancelling those requests after) could corrupt pending days and show an incorrect remaining balance. Cancelling requests that never incremented pending while untracked no longer drives pending days negative, and remaining days never exceed entitlement for tracked types.
- Fixed *(SIBO)* — On the booking details Tasks & Requests list, staff could mark a pendingPayment task as Done via the row checkmark, even though edit mode locks that status. The checkmark now follows the same rule as edit mode.
- Fixed *(SIBO)* — When the AI Router auto-sent a courtesy close reply, the message was delivered to the guest but saved into a new separate conversation instead of the one the agent sees. The auto-sent reply now files into the same conversation thread.
- Fixed *(SIBO)* — Creating a cleaner in Cleaning Manager with a different email but the same phone as an existing ops/staff user silently overwrote that account. Create now blocks phone conflicts with non-cleaner users instead of reusing and patching an existing staff account.
- Fixed *(SIBO)* — In Cleaning Manager, after assigning a cleaning, changing only the start date left the old end date in place so the cleaning appeared to span multiple days. Rescheduling start date now clears or recalculates the end date so the slot stays on a single day.
- Fixed *(SIBO)* — On Tax Rules, the Cities filter crashed with Duplicate value undefined when a city had multiple accounts. Parent tree nodes now use unique values, and the city/account picker renders correctly for multi-account cities.
- Fixed *(SIBO)* — Some guests message on WhatsApp with a username instead of a regular phone number. Agents and the bot could receive those messages but could not reply. Replies now send successfully, the inbox no longer shows a fake phone number for those guests, and when a booking is linked, the booking phone is preferred for display.

---
[View original release email](./release-email.html)
