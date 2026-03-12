---
layout: version
title: Version P1.28(1)
has_children: false
parent: Versions
nav_order: 927
release_date: "Mar 12, 2026"
---


# Version P1.28(1)

**Released:** Mar 12, 2026

**Damage Protection** as an alternative to a security deposit in Online Check-In, **invoice resend** directly from the Guest App, a **secure password manager** for third-party credentials in SIBO, and improvements to sales agent quote management, Nuki lock access, and report deduplication.

**Damage Protection as Alternative to Deposit**
![Damage Protection as Alternative to Deposit](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%281%29/damageProtection_1.png)

![Damage Protection as Alternative to Deposit](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%281%29/damageProtection_2.png)

**Resend Invoice**
![Resend Invoice](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%281%29/sendInvoice.png)

**Secure Password Manager for Third-Party Systems**
![Secure Password Manager for Third-Party Systems](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/Release%20Notes/P1.28%281%29/securedPasswordManager_1.png)

### What's New?

#### <u>Website & App</u>

**Damage Protection as Alternative to Deposit:**
- **Damage Protection** — Hosts can now offer damage protection as an alternative to a security deposit in the Online Check-In flow. Guests pay a small non-refundable fee instead of having a deposit held on their card, giving hosts an additional revenue stream while reducing checkout friction.

**Download Generated Invoices:**
- **Resend Invoice** — After an invoice is generated, guests can resend it directly to their email address from the Website or Guests App, without needing to contact support.

#### <u>SIBO</u>

**Secure Password Manager:**
- **Centralized credential storage** — Staff can store and retrieve credentials for external systems (OTAs, payment providers, integrations) in a password manager built into SIBO. Access is controlled per individual user permissions, so each team member only sees the credentials they are authorized to use.

**Nuki Backup Access Code:**
- **Persistent admin code** — A persistent admin access code for Nuki locks is now visible in SIBO for use when Nuki's service is temporarily unavailable. This update also adds provider information and a direct link to the Nuki web portal for faster access.

#### <u>Direct Bookings</u>

**Edit Existing Quote Offers:**
- **In-place quote editing** — Sales agents can now modify an existing quote (discount, dates, and other terms) directly in SIBO without creating a new offer link. The original link remains valid, so guests don't need to find or re-enter a new URL to complete their booking.

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Extended the "Review Existing Reports" gate to also include open reports for the same common area (building + common area). Staff can select an existing report to log the acknowledgment and increment a counter; the "Issue already reported, close report" option remains available without requiring a selection. This lightweight trail forms a data basis for future issue prioritization.
- Fixed *(SIBO)* — Invoices were being created but not sent when using the "Create & Send" button on Belgium-related bookings. Both actions now complete correctly.
- Fixed *(SIBO)* — Agents were incorrectly blocked from ending their shift even with no active cases — occurring when a conversation was reassigned but the AI/human handler remained linked to the original agent, or when a new conversation was auto-assigned before escalation. Both scenarios now correctly release the shift.
- Fixed *(SIBO)* — Optional add-on services (e.g. Early Check-In, Late Check-Out) paid via payment link were being recorded twice in the booking — once as paid and once as unpaid — causing incorrect totals and potential refund errors. The duplicate entry has been fixed.
- Fixed *(SIBO)* — When a Booking.com or Airbnb booking was canceled or relocated while a SIBO overbooking existed on the same dates, the system incorrectly marked those dates as available. Availability now correctly reflects the actual database state after cancellation or relocation.
- Fixed *(Airbnb)* — Availability checks were failing for Airbnb-only listings (properties not shown on the website), causing Airbnb to incorrectly mark those listings as unavailable. Availability is now reported correctly for Airbnb-only properties.
- Fixed *(SIBO)* — When a late check-out request was approved at a different time than requested, the confirmation screen showed the originally requested time rather than the approved time. The confirmation now correctly shows the approved time.
- Fixed *(Website/App)* — When a member discount outperformed a promo code, the system correctly applied the better discount but still showed a green "Promo code applied" message. This has been updated to a clear message reflecting what was actually used.
- Fixed *(Website/App)* — On slow connections, the booking flow page would jump or shift as content loaded. Layout stability during progressive content loading has been improved.
- Fixed *(Website/App)* — Clicking the search button on the homepage sometimes redirected users back to the homepage instead of the relevant city results page. The redirect now consistently leads to the correct city page.
- Fixed *(Website/App)* — When a quote discount was higher than a membership discount, both were being applied in the price breakdown, resulting in an incorrect total. The system now correctly applies only the better of the two discounts.

---
[View original release email](./release-email.html)
