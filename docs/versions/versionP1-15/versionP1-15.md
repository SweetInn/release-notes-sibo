---
layout: default
title: Version P1.15
has_children: false
parent: Versions
nav_order: 944
---


# Version P1.15

**Released:** Jan 14, 2025

![Version P1.15 - Recent Updates]({{ "/assets/images/versionP1.15/recent-updates_1736753328_1.png" | relative_url }})

### What's New?

#### <u>Website & App</u>

**Online Check-In Flow Improvements:**
- Simplified Document Upload Step ("Who's Coming") — redesigned flow to improve clarity on the number of guests and required actions. Progress is now saved so guests can return to the step without re-uploading documents.
- Improved Handling of Missing Data in Document Upload — when the scraper cannot automatically extract all required details, guests now receive clearer guidance on what is missing and can complete the process with fewer clicks.
- Optimized Check-In Flow — steps with no required guest actions (e.g., Identity Verification for already verified accounts) are now automatically hidden, making the process feel shorter and more streamlined.
- Language Selection Accessibility — language selection is now directly available in the header of the Online Check-In page, making it easier for guests to locate and change their preferred language.

**Destination Page Filters:**
- Expanded Price Filter Range — guests can now filter properties across a wider price range for more accurate search results.

#### <u>Operations</u>

**Booking Details Enhancements:**
- Scraping Check-In Document Data in SIBO — when agents upload guest documents in SIBO, relevant data is now extracted automatically, improving the daily CSV reports for Barcelona and Milan.
- Booking Tabs Consolidated into a Dropdown — all tabs in the Booking Details screen have been grouped into a single dropdown menu for a cleaner and more organized interface. *(Preparation for the upcoming "Conversations" tab.)*

**Cleaning Tool Updates:**
- Block Dates for Cleaning Tasks — users can now block dates when creating a cleaning task.
- Cleaner Lock Status Icons — new icons provide a quick visual status of cleaner locks, allowing users to identify issues faster.
- Cleaner Lock Logs — track all actions performed with a cleaner lock code for a specific cleaning task, enhancing monitoring, security, and understanding of the system's logic.

#### <u>Direct Bookings</u>

**Quote Page Improvements:**
- Pagination Support — users can now navigate through all quotes, beyond the previous 60-quote limit.
- New Filters — search for specific quotes more easily with enhanced filtering options including ID, Quote Creator, and Status.
- Visual Status Indicators — color-coded statuses for better visibility and clarity.

#### <u>Additional Updates & Bug Fixes</u>

- Website & App — updated form fields for better visibility and ease of use (global UI improvements).
- Website & App — fixed incorrect image on the Services page.
- Website & App — removed incorrect text from the Check-Out Transportation Service; updated text on the Destination page when there are no search results.
- Unified Inbox — fixed error with long conversation subjects, preventing errors when creating conversations with very long subject lines.
- Unified Inbox — resolved duplicate processing of conversations, fixing an issue where some conversations were processed twice causing creation errors.
- Hotel Directory — resolved a bug in the "Save" action where filled information was not being saved.
