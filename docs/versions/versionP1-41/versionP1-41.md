---
layout: version
title: Version P1.41
has_children: false
parent: Versions
nav_order: 920
release_date: "Jul 07, 2026"
---


# Version P1.41

**Released:** Jul 07, 2026

This release marks a major step forward for how Sweett operations work. Maintenance dispatch is now automated — when a report comes in, SIBO checks the technician's skills and rostered shift, finds the best available match, and creates the task without anyone having to lift a finger. Also in this release: smarter cancellation handling for checkout cleaning tasks, a faster and more accessible homepage for guests, and SEO improvements across all six supported languages.

**Automatic Maintenance Task Scheduling**
![Automatic Maintenance Task Scheduling](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1783351987/Release%20Notes/P1.41/task-automation-2.jpg)

**SEO Improvements**
![SEO Improvements](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1783349927/Release%20Notes/P1.41/seo-improvements.png)

**Sweett Homepage — Faster & More Accessible**
![Sweett Homepage — Faster & More Accessible](https://res.cloudinary.com/sweetinn/image/upload/q_auto,f_auto/v1783349927/Release%20Notes/P1.41/homepage-perf-improvements.png)

### What's New?

#### <u>Operations</u>

**Automatic Maintenance Task Scheduling:**
- **Technician matching** — when an eligible maintenance report is submitted, the system finds the best available technician by matching their skills to the task category, verifying their rostered shifts and availability, and factoring in the property's area and location
- **Guest timing respected** — scheduling respects any guest timing preferences set during the stay
- **Auto task creation** — when a valid slot is found, a linked maintenance task is created and scheduled automatically; if not possible, the report stays open with a clear system comment explaining why
- **High-priority handling** — for fully booked days, the scheduler can move a lower-priority task to free up a slot, while emergency reports and guest-agreed timings are fully protected
- **Visual indicator** — auto-scheduled tasks appear with a dashed border in the task organiser, distinguishing them from manually created tasks at a glance

**Cleaning & Availability — Same-Day and In-Stay Cancellation Handling:**
- **Same-day cancellation, guest did not arrive** — cleaning is cancelled and the apartment stays open for sale
- **Same-day cancellation, guest used the apartment** — cleaning is scheduled for the next day and the property is blocked for that night
- **In-stay cancellation** — cleaning is scheduled for the next day and the property is blocked for that night
- **Occupation detection** — determined from smart lock activity, occupancy signals, or agent confirmation; no manual intervention needed

#### <u>Website & App</u>

**Homepage Performance Optimizations:**
- **Faster load time** — improvements to hero image loading, font handling, image delivery via next/image, and third-party script timing reduce the time to first meaningful paint across desktop and mobile
- **Accessibility improvements** — Lighthouse performance and accessibility scores are up across all supported languages

**SEO Improvements:**
- **Page-level hreflang tags** — all six supported languages (English, French, Italian, Spanish, Chinese, German) are now linked on every indexable page so search engines match users to the right locale
- **Multilingual sitemaps** — all public URLs are listed for each locale, replacing the previous English-only sitemap
- **Crawlable homepage city links** — destination city links are now present in the initial HTML and visible to search engines without JavaScript execution

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(SIBO)* — Node.js 20 LTS runtime upgrade for the back-office web application; no visible UI changes, improves build stability and keeps infrastructure current
- Fixed *(SIBO)* — Quote Creation percentage discount only registered the first digit of keyboard input, causing multi-digit values (e.g. typing "20") to be applied as single-digit discounts (e.g. 2%), producing quotes with an incorrect 10x lower price reduction
- Fixed *(SIBO)* — Early check-in readiness gate was reading a stale "clean" status from a previous turnover on same-day back-to-back bookings, allowing guests into apartments that had not yet been cleaned; readiness now reflects the actual cleaning state for the arriving booking
- Fixed *(SIBO)* — AI chatbot fabricated an incorrect standard check-in time when declining early check-in requests; the chatbot now reads the real check-in time from booking context and states it accurately
- Fixed *(Unified Inbox)* — WhatsApp conversations were not displaying the phone number label despite the number being present in the system

---
[View original release email](./release-email.html)
