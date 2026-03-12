---
layout: version
title: Version P1.11
has_children: false
parent: Versions
nav_order: 950.5
release_date: "Aug 18, 2024"
---


# Version P1.11

**Released:** Aug 18, 2024

### What's New?

#### <u>Website & App</u>

**General:**
- New Payment Form — replaced Stripe's payment form to support upcoming payment methods such as Apple Pay and Google Pay.
- New Language Support — German has been added to the website, expanding accessibility to more guests.

#### <u>Online Check-In</u>

**Check-in & Check-out step:**
- Guests can now order paid early check-in and late check-out options directly during the check-in process and pay for them in the payment step.
- Guests can cancel unpaid early check-in or late check-out services if they change their mind.
- The time selection feature for check-in and check-out now responds to mouse/trackpad scrolling for improved user experience.

**Who's Coming step:**
- A disclaimer is shown if the guest tries to finish the step without completing all required documents.
- Guests with missing documents will now land directly on this step in order to complete it.
- Progress updates are now displayed while uploading multiple documents (more than two), improving transparency during the process.

#### <u>Digital Keys</u>

**Hotel support:**
- The address field will now display the room number if the booking is for a hotel room.
  *(This change is reflected across various pages where the address is shown.)*
- The lock of the apartment will be displayed as "Room" when the booking is for a hotel room.

#### <u>SIBO</u>

**Unified Inbox:**

**General:**
- Users with the appropriate permissions can now compose new WhatsApp or Email conversations directly from the Unified Inbox.
- New WhatsApp conversations can be initiated from a selection of templates, streamlining communication.
- Logic has been added to prevent closing conversations that have open reports.

**Chatbot:**
- The system now recognizes OTA reservation IDs in addition to internal booking IDs when asking guests for their booking information.

**Services:**

**Cancellation Policy:**
- Early check-in and late check-out services now follow the booking's cancellation policy.
- Transportation and housekeeping services are fully refundable up to 2 days before the service date.

**Additional:**
- Cancelling an early check-in or late check-out service will automatically update the calendar.
- The requested time for early check-in and late check-out services is now required and stored.
- Cancelled services will be clearly marked with a "cancelled" sign in the booking's price breakdown.

**Inventory Management:**
- New building types — when creating a building, you can now choose between "Hotel" and "Virtual Building."
  - **Hotel:** Follows the existing logic.
  - **Virtual Building:** Functions similarly to a hotel, with the added capability of linking individual properties to Airbnb.
  *(Support for migrating existing properties to Virtual Buildings will be included in the next version.)*

#### <u>Enhancements & Bug Fixes</u>

- Fixed *(Website)* — some payments made from the website were missing the Payment Method Type.
- Fixed *(Website)* — some elements were not displaying correctly when the browser zoom feature was in use.
- Fixed *(Website)* — over-navigation was allowed while using arrows in the featured neighborhoods component.
- Fixed *(Website)* — payments with credit cards that require a 3D Secure step on every transaction were failing to process.
- Fixed *(NPS/ISR Emails)* — the property field was not displaying the room number for hotel bookings.
- Fixed — approximately 150 translation fixes for missing translation texts.
- Fixed — approximately 60 translation texts that were too long and appeared broken on the website.
