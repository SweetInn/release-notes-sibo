---
layout: default
title: Version P1.11(5)
has_children: false
parent: Versions
nav_order: 949
---


# Version P1.11(5)

**Released:** Sep 26, 2024

### What's New?

#### <u>Website Updates</u>

**General:**
- Booking Flow — restructured the booking creation process into three steps: Your Details, Rates & Coupons, and Payment. This improves readability for guests and is expected to enhance conversion rates.
- New Real Estate page — a new Real Estate page has been added, aimed at fostering business opportunities with various market partners.

#### <u>SIBO Updates</u>

**Inventory Management:**
- Property — when creating or editing a property, the form now allows the selection of a specific lobby. This helps direct guests to the nearest lobby, rather than the main city lobby.
- Hotel — missing fields have been introduced to enable editing of images, descriptions, rules, and amenities for hotels or buildings.
- Virtual Building — a migration process has been implemented to convert single properties into building formation, particularly useful when multiple properties are located in the same building.
  *(Due to the sensitivity of this action, it can only be performed with the assistance of the R&D team.)*

**Integration:**
- Airbnb Calendar sync — immediate calendar corrections are now enabled if an availability check returns unavailable dates. A full calendar sync will follow automatically in such cases.
- Rentals United sync — some errors from Rentals United were passed without retry. Retry logic has been added to handle these errors and keep the calendar in sync.

#### <u>Additional Updates & Bug Fixes</u>

- SIBO, booking details — a new tab has been added to display open/related reports.
- Exchange rates were being deleted every few seconds, causing system slowness. This has been resolved.
- SIBO, booking payments — indications are now displayed when Google Pay or Apple Pay is used.
- Website — visual updates have been made to improve readability where the room number is shown.
- The "Back" button has been repositioned to the header on mobile web.
- SIBO, multi-calendar — you can now select an entire building at once in the calendar view.
- Website, Online Check-In — the passport preview has been enlarged for better visibility.
- Incorrect Digital Keys times were being sent to Salto systems. This has been resolved.
