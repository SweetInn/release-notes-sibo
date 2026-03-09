---
layout: default
title: Version P1.19
has_children: false
parent: Versions
nav_order: 939
---


# Version P1.19

**Released:** Jun 10, 2025

![Version P1.19 - Highlights]({{ "/assets/images/versionP1.19/119.png" | relative_url }})

### What's New?

#### <u>SIBO</u>

**Leads Management:**
- New Leads Management module available under the Customers menu.
- Role-based access with View, Create, and Modify permissions.
- Capture leads from bookings, BI, or conversations.
- Track opportunities, meetings, follow-ups, and notes.
- Fully scoped by the user's account, with a new BI endpoint.

**Journeys — Templates Redesign:**
- Replaced the receipt email and its PDF templates.
- Refreshed B2B booking confirmation.
- Renewed the email confirmation template (with/without code).

**Properties & Buildings — Hotel CMS Management:**
- New Website CMS panel now available for hotel-type buildings.
- Upload and organize content for navigation menu, hero, galleries, eat & drink, hotel content features, and more.
- Per-language support with default fallbacks and validations.

**Properties & Buildings — Tax Rule Management:**
- View, create, and bulk-edit tax rules per property.
- Supports fixed, percentage, and minBetween rule types.
- Smart filters, inline history, effective date ranges, per-person/per-bedroom logic, and rule preview.

**Unified Inbox:**
- WhatsApp Delivery Feedback — WhatsApp compose flow now shows real-time status or an error message if the number is not reachable.
- System Tag Logging — shows when tags are added/removed and by whom, with full log history.

**Bookings:**
- ECI/LCO Logic Enhancement — ECI/LCO cron now auto-declines when active "High" or "Emergency" priority reports are found, avoiding guest friction when issues exist.
- ETA/ETD Edit Restrictions — prevents agents from setting an ETA later than the confirmed ETA, or an ETD earlier than the confirmed ETD, ensuring guests receive accurate arrival and departure details. Agent permissions allow overriding this logic.

**Tasks:**
- OTA Comments Detection — Booking.com guest comments are now parsed into "Customer Comments" and used to trigger operational tasks.

#### <u>Website & App</u>

**Redesigned Hotel Page:**
- Launched a content-driven hotel page for hotel-type buildings.
- Features include hero video, custom galleries, room types, dining options, and an interactive map.
- Fully responsive layout with fallback support when data is missing.
- Enhanced "You May Also Like" section for cross-promotion.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(SIBO)* — Check-In-Readiness logic now correctly sets the ETA and modifies digital keys access when ready.
- Fixed *(Bookings)* — availability issues for combo apartments; when paid ECI/LCO orders are completed, availability correctly closes on the parent/child units.
- Fixed *(Bookings)* — ECI/LCO was being approved when combo units were not fully cleaned.
- Fixed *(SIBO)* — Booking.com comment parser no longer causes premature task creation.
- Fixed *(SIBO)* — Scores Dashboard no longer shows deleted properties or incorrect risk counters.
- Enhancement *(Unified Inbox)* — added a new CC Specialists Inbox.
