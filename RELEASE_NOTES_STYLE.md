# Release Notes Style Guide

This document defines the canonical style for all version pages in this Jekyll site. Any LLM or contributor adding or editing a version page **must** follow this guide.

---

## Page Structure Template

Every version page must follow this exact order:

```markdown
---
layout: default
title: Version P1.XX
has_children: false
parent: Versions
nav_order: NNN
---


# Version P1.XX

**Released:** Mmm DD, YYYY

[Optional: 1–3 sentence intro paragraph summarising the release theme — only include if content is meaningful]

### What's New?

#### <u>Category Name</u>

**Sub-feature name:**
- **Bold label** — description
- **Bold label** — description

#### <u>Enhancements & Bug Fixes</u>

- Enhancement *(Scope)* — description
- Fixed *(Scope)* — description

#### <u>What's Coming Next</u>

- Feature name — short description
```

---

## nav_order Numbering Rule

The sidebar is sorted **descending by `nav_order`** — lower numbers appear higher (newer versions first).

**Rule:** every new version gets `nav_order = current_top_nav_order - 1`

Example: if the most recent version has `nav_order: 927`, the next version gets `nav_order: 926`.

Never edit existing `nav_order` values when adding a new version.

---

## Valid Category Section Names

Use only these `#### <u>...</u>` labels. Do not invent variations.

| Label | When to use |
|---|---|
| `#### <u>Website & App</u>` | Guest-facing website and mobile app changes |
| `#### <u>SIBO</u>` | Back-office / operations platform changes |
| `#### <u>Integrations</u>` | Third-party channel and API integrations (Airbnb, Rentals United, Booking.com, etc.) |
| `#### <u>Operations</u>` | Task management, cleaning, reports |
| `#### <u>Direct Bookings</u>` | Quotes, proposals, partner bookings |
| `#### <u>New Features</u>` | Cross-cutting new features that span multiple areas |
| `#### <u>Guest Journey Redesign</u>` | Journey-specific releases (use sparingly) |
| `#### <u>Enhancements & Bug Fixes</u>` | Always the final section before "What's Coming Next" |
| `#### <u>What's Coming Next</u>` | Optional forward-looking section — only include if content exists |

**Never use:** "Website Updates", "SIBO Updates", "SIBO Enhancements", "Website & App Enhancements", "Additional Updates & Bug Fixes", "Small Additions & Bug Fixes", "Bug Fixes" as section titles. These are legacy variants — all standardized to the table above.

---

## Sub-feature Header Style

Use bold text with a colon for named sub-features within a section:

```markdown
**Feature Name:**
- bullet
- bullet
```

Never use italic (`*Label:*`) for sub-feature headers.

---

## Bullet Patterns

### Feature bullets (inside `### What's New?` sections)

```markdown
- **Bold label** — description of what changed or what it does
```

### Enhancements & Bug Fixes bullets

All bullets in the `#### <u>Enhancements & Bug Fixes</u>` section must use one of these two prefixes:

```markdown
- Fixed *(Scope)* — what was broken and how it was resolved
- Enhancement *(Scope)* — what was improved and why it matters
```

**Scope** is a short product area in parentheses (italic), e.g.: `*(SIBO)*`, `*(Website/App)*`, `*(Unified Inbox)*`, `*(Airbnb)*`, `*(Booking.com)*`, `*(Digital Keys)*`, `*(Online Check-In)*`.

If a RND ticket number exists, append it inline in a second set of italic parentheses:

```markdown
- Enhancement *(SIBO)* — a new tab added to booking details to display open reports. *(RND-16203)*
```

---

## Image Embedding

Always use the Jekyll Liquid `relative_url` filter. Never use raw relative paths.

```markdown
![Alt text]({{ "/assets/images/versionP1.XX/filename.png" | relative_url }})
```

Image assets live in `assets/images/versionP1.XX/` (use the version folder matching the page).

---

## Video Embedding

Use an HTML5 `<video>` tag with the `relative_url` filter:

```html
<video width="100%" controls>
  <source src="{{ "/assets/Videos/filename.mp4" | relative_url }}" type="video/mp4">
</video>
```

---

## Callout Blocks

Use sparingly and only when the note is genuinely important to the reader.

```markdown
{: .note }
Short note text here — one or two sentences max.

{: .important }
Critical message that requires immediate attention.
```

Use `{: .note }` for opt-in caveats, activation timing, or dependency notes.  
Use `{: .important }` for behavioural changes that require action from the team.

Do **not** mix callout blocks with inline italic notes `*(...)* ` for the same type of information — pick one and apply it consistently within a page.

---

## Known Exceptions

- **`versionP1-14`** — intentional feature deep-dive format (contains a table and example walkthrough). Do not apply this style guide to that file.
- **`v41`–`v46`** — legacy version pages created before the P1.xx naming convention. Their formatting is not standardized. Do not apply this guide retroactively.

---

## Frontmatter Reference

```yaml
---
layout: default
title: Version P1.XX          # Display title shown in sidebar
has_children: false
parent: Versions
nav_order: NNN                 # Integer; lower = higher in sidebar (newer first)
---
```

Sub-pages (deep-dives attached to a version) use:

```yaml
---
layout: default
title: Sub-page Title
has_children: false
parent: Version P1.XX
nav_order: 1
nav_exclude: true              # Hides from sidebar if standalone deep-dive
---
```
