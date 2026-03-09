---
layout: default
title: Version P1.25(5)
has_children: false
parent: Versions
nav_order: 932
---


# Version P1.25(5)

**Released:** Dec 09, 2025

P1.25(5) delivers the new **Deliveries Rules System** — a unified engine that manages pricing, availability, and overrides for all delivery services. It also introduces hotel/lobby pickup logic and different guest override options.

### What's New?

#### <u>SIBO</u>

**Deliveries Rules Engine:**
- A new unified engine defines all delivery service rules in one place.
- Ensures that pricing, availability, guest benefits, hotel pickup behavior, and delivery options follow the same logic across the platform.
- Eliminates manual checks and gives guests clearer, more predictable delivery choices.

**Task Time Windows Across Dates:**
- Tasks can now display time windows that span multiple dates when required by delivery rules (e.g., a maximum allowed delivery window of 24 or 48 hours).
- Cross-date windows are set by rules, not manually. Agents can still modify the time window within their defined limits (e.g., 3-hour window).

#### <u>Website & App</u>

**Online Check-In Time Selection:**
- Guests now choose their own check-in and check-out times with no default hour pre-selected.
- Prevents operational overload by spreading guest arrivals more evenly and ensures more accurate planning for housekeeping and front desk teams.

#### <u>Integrations</u>

**Rentals United OTA Cutoff Sync:**
- The platform now sends the correct "accept reservation until hour" to Rentals United.
- Improves the accuracy of last-minute booking availability and reduces the risk of unexpected late arrivals.

#### <u>What's Coming Next</u>

- **AI Chatbot** *(SIBO)* — short autonomous agents that manage guest conversations using SOP-based decision logic with built-in escalation handling.
- **Reports Smart Automation** *(SIBO)* — reports will automatically re-open when pending tasks miss their due date, with new visual indicators.
- **Inventory Inspection Tasks** *(SIBO)* — periodic checks to verify each listing's inventory and confirm that no items are missing.
- **Inventory Completion Tasks** *(SIBO)* — workflow that determines from which stock source missing items should be replenished after inspections.
- **Guidebooks Collaboration** *(SIBO)* — tools for agents to request missing information in guidebooks, and a requests management screen to ensure every property has a complete, verified list of guides.
