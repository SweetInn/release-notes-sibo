---
layout: version
title: Version P1.19(5)
has_children: false
parent: Versions
nav_order: 938
release_date: "Jun 19, 2025"
---


# Version P1.19(5)

**Released:** Jun 19, 2025

![Version P1.19(5) - Highlights]({{ "/assets/images/versionP1.19_5/1195.png" | relative_url }})

### What's New?

#### <u>Website & App</u>

**PayPal via Stripe Payment Element:**
- Adds PayPal support for all guest-facing payment screens on the new website and app.
- Enabled across Booking Flow, Check-In, Services, Pay Links, Deposit Links, and more.
- Clearly shown in SIBO's payments tab.

{: .note }
Activation will follow a few days after deployment. Applies only to the new version of the site and app.

**Track Hotel & Property Page Views in Analytics:**
- Tracks building and property page views across desktop and app WebView.
- Logs contextual metadata (city, area, type, etc.) into Google Analytics.
- Supports better marketing analysis and content performance tracking.

#### <u>SIBO</u>

**Voided Deposit Receipt Links:**
- Adds a public Stripe receipt URL for voided deposits in the booking's payment tab.
- Eliminates the need for agents to access Stripe or share screenshots.
- Lays groundwork for automating deposit release journeys in future.

#### <u>Integrations</u>

**Airbnb Listing Quality API:**
- Fetches listing quality status, risk level, and issues.
- Stores full history, updates daily and in real-time.
- Enables BI alerts and tracking of listing health over time.

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(Booking.com)* — Score Parser was not receiving updated scores. This has been resolved.
- Fixed *(Website/App)* — guests were not seeing payment confirmation after completing Google Pay on Android.
