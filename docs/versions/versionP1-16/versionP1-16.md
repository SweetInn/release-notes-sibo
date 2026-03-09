---
layout: default
title: Version P1.16
has_children: false
parent: Versions
nav_order: 943
---


# Version P1.16

**Released:** Feb 06, 2025

![Version P1.16 - Updates]({{ "/assets/images/versionP1.16/version-16-upda_1738836603-1.png" | relative_url }})

### What's New?

#### <u>SIBO</u>

**Booking Details:**
- Conversations Tab Added — a new Conversations tab is now available in the Booking Details screen, providing quick access to relevant guest conversations and allowing users to compose new ones.

**Services — Transportation Approval Flow:**
- Automated Email & Response Flow:
  - The system now sends an approval request email to transportation providers.
  - A new landing page has been created for providers to respond to approval requests.
  - Responses are stored and processed accordingly.
- Store Transportation Provider Details — the system now stores transportation provider details for use in the transportation approval workflow.
- New Email Template for Transportation Provider Approvals — a dedicated email template has been created for the transportation provider workflow.

**Unified Inbox:**
- Canned Replies — New Parameters Support: conversations associated with bookings now support additional canned reply parameters, including property name and city name, making it easier to send templated responses efficiently.
- Rentals United Messaging Integration — started the integration of messaging and review directly from Rentals United.
- Snooze with Custom Date & Time — users can now snooze conversations with a specific custom date and time, allowing more control over follow-ups.
- Service Links for Chatbot — when a guest asks for transportation or housekeeping services, the Chatbot now provides a direct link to the website's service order flow instead of a chat questionnaire.

**Airbnb Integration:**
- Airbnb Scores — retrieval of listing scores as preparation for the Scores Dashboard feature and BI dashboard usage.

#### <u>Website & App</u>

- Search Listings Near Custom Locations — users can now search for listings near a custom location on the City Page Map, improving location-based filtering.
- Transportation Provider Landing Page — a dedicated landing page has been created for the transportation provider flow.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — the Create Service Request function now uses the same API route as the website, ensuring consistency across platforms.
- Enhancement *(SIBO)* — users can now view, add, and edit the payoutContracts configuration in JSON format for each account city.
- Enhancement *(Unified Inbox)* — the sender field in emails sent to guests will no longer display the full name of SIBO users, ensuring privacy compliance.
- Enhancement *(SIBO)* — when there is an error retrieving ECI/LCO prices, the service price remains editable for manual adjustments.
- Fixed *(SIBO Cleaning)* — creating a cleaning user was allowing duplicate users with the same email address but different IDs.
- Fixed *(SIBO)* — disclaimer modal buttons were stacking vertically instead of displaying side by side.
- Fixed *(SIBO)* — a layout issue was causing broken UI on wide screens in the booking creation flow.
- Fixed *(Online Check-In)* — removed ambiguous texts about deposit from the missing payments step.
- Enhancement *(Unified Inbox)* — "BI OCI reminder" conversations are now automatically associated to a booking.
