---
layout: version
title: Version P1.17
has_children: false
parent: Versions
nav_order: 941
release_date: "Mar 26, 2025"
---


# Version P1.17

**Released:** Mar 26, 2025

![Version P1.17 - Updates]({{ "/assets/images/versionP1.17/2026-03-09_12-27-24.png" | relative_url }})

### What's New?

#### <u>SIBO</u>

**Integrations:**
- New "Breakfast Included" service for Booking.com reservations, automatically applied when breakfast is included.

**Dashboard:**
- New management screen for daily breakfast deliveries.

**Unified Inbox:**
- A disclaimer notification now shows when a reply matches any of the previous messages in the same conversation, helping to avoid the appearance of automated responses.
- Permission management to create new tags.
- Canned replies system migrated to support WhatsApp templates.

**Create/Edit Booking:**
- Allow selecting an agency when creating or updating B2C bookings *(permission based)*.
- Added website link to the hotel directory page in the hotel room's booking details screen.
- Deposit link expiration time is now editable *(based on accountCity settings)*.

**Journeys:**
- Ability to delete journeys from the builder interface.
- Added language inputs when creating a new journey.
- Added language inputs when editing an existing journey's messages.

**Tasks:**
- Scheduling time window tasks is now limited to a maximum of 3-hour timeframes.

#### <u>Website & App</u>

**Homepage:**
- Redesign of the homepage and header for improved hotel-focused experiences.

**City & Building Pages:**
- Enhanced loading speed of the city page with and without dates selection.
- Reworked check-in/check-out date filters to improve UX when spanning multiple months.

**NPS:**
- A new Net Promoter Score (NPS) flow with a new design, a personal guest coupon for next stay, and an OTA review request.

**Invoices:**
- Create and send invoice after check-out now supported directly from the website and app.

**Guest Services:**
- Check-in/Check-out Transportation forms now include support for specifying the number and type of child seats. Full support across website, SIBO, provider email, provider request page, and chatbot.
- Check-in/Check-out Transportation forms now include disclaimers if the pickup time doesn't match the approved check-in/out time.
- Support for editing the driver's name on the transportation provider request landing page.

**Guest Profile:**
- New page added to the guest profile where guests can view their available coupons.

**Old Website (Partners):**
- The mobile flow now allows guest number updates during booking.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(Rentals United)* — "Sweet | " is now added as a prefix to property names synced to Rentals United *(except hotels)*, for better visibility with the Google Travel integration.
- Enhancement *(WhatsApp)* — WhatsApp templates have been migrated to use the new content templates system *(mandatory infrastructure)*.
- Fixed *(SIBO)* — after an internal room change for an Airbnb hotel reservation, the OCI was not opened correctly.
- Fixed *(Website)* — website extension for Booking.com reservations was causing a pricing mismatch.
- Fixed *(SIBO)* — editing the hotel directory CMS was not saving changes.
- Fixed *(SIBO)* — Scores Dashboard was showing a wrong counter of at-risk listings.
- Fixed *(SIBO)* — Scores Dashboard was showing properties that had already been deleted from the system.
- Fixed *(SIBO)* — for some low-score In-Stay Reviews, the report was not being automatically generated as expected.
- Fixed *(SIBO)* — alerts about transportation service were not being automatically resolved when the provider approves the ride.
