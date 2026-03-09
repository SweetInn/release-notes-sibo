---
layout: default
title: Version P1.18
has_children: false
parent: Versions
nav_order: 940
---


# Version P1.18

**Released:** May 13, 2025

![Version P1.18 - Guest Journey]({{ "/assets/images/versionP1.18/118.png" | relative_url }})

This version focuses entirely on a single, impactful area: the **Guest Journey** — from the moment a booking is created until after the guest checks out.

The full journey has been redesigned and optimized to deliver precise, minimal, and meaningful communication at every stage, ensuring guests receive the right message at the right time, with no friction and no unnecessary noise.

### What's New?

#### <u>Guest Journey Redesign</u>

**Touchpoints included:**

- **Booking Confirmation** — clean, clear message sent instantly with all the essentials.
- **OCI Reminders** — strategically timed reminders to ensure smooth online check-in.
- **Booking Dashboard Link** — direct access for guests to manage their stay.
- **In-Stay Review** — one-touch feedback request to assess guest satisfaction during the stay.
- **Extension Offer** — proactive message offering to extend the stay (when available).
- **Check-Out Notice** — friendly reminder with essential departure info.
- **NPS Request** — post-stay survey with redesigned UI and guest coupon incentive.
- **Early Check-In Decision** — approval or decline messages sent the evening before arrival, based on real-time evaluation of cleaning, maintenance, and inspection schedules.
- **Late Check-Out Decision** — approval or decline messages sent the evening before departure, driven by our rules engine for operational feasibility.
- **Cancellation** — message sent whenever a booking is cancelled.

**Why it matters:**

- Redesigned with cleaner UI, responsive layouts, and a clearer tone.
- Consolidated to reduce message fatigue.
- Optimized to ensure guests are not lost throughout the journey.
- Color-coded to help guests navigate each step with confidence:
  - **Blue** — Primary and recommended actions (e.g., check-in, dashboard access)
  - **Light Blue (Arrow)** — Optional or follow-up suggestions
  - **Red** — Time-sensitive or critical actions requiring attention (e.g., incomplete OCI)

#### <u>Additional Updates & Bug Fixes</u>

- SIBO Quotes — supporting multiple dates and guest options in a single quote.
- SIBO Journeys — automatically creates and updates WhatsApp templates when editing a journey's text *(for Twilio-WhatsApp partners)*.
- Fixed — disconnecting a listing from Airbnb does not always work correctly.
