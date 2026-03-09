---
layout: default
title: Version P1.14
has_children: false
parent: Versions
nav_order: 945
---


# Version P1.14

**Released:** Dec 15, 2024

### What's New?

#### <u>Multiple City Tax Rules — Feature Deep Dive</u>

The new **Multiple City Tax Rules** feature enhances the ability to manage and calculate City Tax based on multiple rules defined by valid start and end dates.

---

**Example: A Multi-Year Reservation in Milan**

| | |
|---|---|
| **Dates** | 1 night in 2024 + 1 night in 2025 |
| **Guests** | 4 adults |
| **2024 City Tax rule** | €4.5 per person per night |
| **2025 City Tax rule** | €6.3 per person per night |

**Previous behavior:**
SIBO applied only one rule for the entire reservation, leading to errors:
- If the rule was updated late: €36 (€4.5 × 4 guests × 2 nights)
- If the rule was updated early: €50.4 (€6.3 × 4 guests × 2 nights)

**Current behavior:**
SIBO now applies the correct rule for each night:
- 2024: 1 night × 4 adults × €4.5 = **€18**
- 2025: 1 night × 4 adults × €6.3 = **€25.2**
- **Total City Tax: €43.2**

![Multiple City Tax Rules example]({{ "/assets/images/versionP1.14/2026-03-09_12-16-07.png" | relative_url }})

---

**Key Benefits:**
1. **Accurate Calculations** — City Tax amounts are calculated precisely, even for multi-year or multi-rule scenarios.
2. **Compliance** — Aligns with official tax changes as soon as they are reported by local authorities.
3. **Operational Efficiency** — Reduces manual adjustments and potential discrepancies in reservations involving overlapping tax rules.
