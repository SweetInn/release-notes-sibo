---
layout: version
title: Version P1.20
has_children: false
parent: Versions
nav_order: 937
release_date: "Jul 29, 2025"
---


# Version P1.20

**Released:** Jul 29, 2025

### What's New?

#### <u>SIBO (Back Office)</u>

**Full Breakfast Support in SIBO:**
- Seamlessly integrates breakfast into booking creation, alterations, and service paylink flows.
- Ensures accurate pricing and task creation whenever guest counts change, reducing manual work.

**Per-Hotel Breakfast Price Override:**
- Customize breakfast pricing per hotel directly in the building form *(feature flags)*.
- Gives more control to align breakfast rates with demand or hotel strategy.

**Reconciliation Assistant for Finance:**
- Quickly matches OTA booking IDs to internal SIBO IDs without manual searches.
- Speeds up financial reconciliations and reduces errors for the finance team.

#### <u>Website & App</u>

**Installment Payment Option:**

![Installment Payments]({{ "/assets/images/versionP1.20/Installments.jpg" | relative_url }})

- Lets guests split booking payments into two installments with clear schedules.
- Helps increase conversions for longer or higher-value bookings by offering flexible payment terms.

**Breakfast Options During and After Booking:**

![Breakfast]({{ "/assets/images/versionP1.20/Breakfast.jpg" | relative_url }})

- Guests can add breakfast while booking or post-booking through Guest Services, with live pricing.
- Drives additional revenue while improving guest convenience and upsell potential.

#### <u>Integrations</u>

**Airbnb API & Webhook Upgrade (v2024.12.31):**
- Mandatory upgrade to Airbnb's latest systems for better reliability, updated field handling, and smoother reservation syncing.
- Ensures compliance and reduces risk of API-related issues.

{: .note }
This upgrade was deployed a week prior to this release.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(Website/App)* — added missing cancellation policy details to the Guest Service Order flow.
- Fixed *(SIBO)* — additional cases where SIBO now correctly returns a Stripe receipt link when deposits are released.
