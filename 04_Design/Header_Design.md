# Atlas Header Design

This document dictates the structural and behavioral design of the Atlas Header for Version 1.0. The Header is the persistent entrance to the world's most trustworthy travel guide. It must remain calm, predictable, and singularly focused on helping the traveler navigate or recover their context.

---

## 1. Purpose

The Header exists to provide persistent, calm orientation. It is the traveler's anchor. Regardless of how deep a user travels into the site's architecture, the Header ensures they can instantly recover their position, execute a specific search, or access the primary planning domains.

## 2. User Goals

The Header solves the following immediate problems:
- "I am lost and need to start over." (Home)
- "I want to explore the broad categories of travel." (Primary Navigation)
- "I have a specific logistical question and need an answer immediately." (Search)
- "I need to access the itinerary or places I previously saved." (Utility / My Trip)
- "Whose advice am I reading?" (Trust / Independence)

## 3. Information Hierarchy

From left to right (in Western reading order), the hierarchy prioritizes identity, trust, primary navigation, exact intent, and utility.

1. **Brand Identity:** The Atlas Logo.
2. **Trust Declaration:** A quiet statement of editorial independence.
3. **Primary Navigation:** The core domains of the Information Architecture.
4. **Exact Intent:** Global Search.
5. **Utility:** Saved Trips / My Trip.

## 4. Desktop Layout

The desktop Header is housed in a container that matches the site's constrained central reading column.

- **Far Left:** The Atlas logo. Directly adjacent is a plain-text lockup stating: "Independent Guide" or "Independent Travel Companion".
- **Center-Left:** A horizontal list of the Primary Navigation links. Spacing is generous to prevent misclicks and reduce visual density.
- **Center-Right:** The Search input field. It is always visible as a text box, clearly indicating its readiness for queries.
- **Far Right:** The "My Trip" or "Saved" utility link.

## 5. Mobile Layout

The mobile Header is optimized for one-handed use and minimal screen real estate.

- **Top Bar:** 
  - **Left:** A standard Hamburger Menu icon.
  - **Center:** The Atlas logo.
  - **Right:** A Search icon.
- **Menu Overlay (Triggered by Hamburger):** A clean, full-screen overlay (not a complex nested dropdown) listing the Primary Navigation, followed by Secondary Navigation options and Utility links. Touch targets are oversized.
- **Search Overlay (Triggered by Search Icon):** The search icon instantly expands into a full-width input field, focusing the keyboard immediately.

## 6. Navigation

**Belongs in Main Navigation (Header):**
The core tasks that cover 90% of user intent.
- Explore
- Plan a Trip
- Routes & Transport
- Travel Guides

**Belongs in Secondary Navigation (Menu Overlay / Footer):**
Important, but not universally urgent across every page view.
- Things to Do
- Compare & Choose
- Services
- About Atlas

**Never Appears in the Header:**
- "Book Now" or aggressive commercial calls to action.
- Deep regional links (e.g., "Fann Mountains" should not clutter the top level).
- External partner links.
- Login/Signup (Atlas focuses on cookie-based/local storage "Saved Trips" for MVP to reduce friction; identity is not a top-level requirement).

## 7. Search

- **Behavior:** Search acts as an intent-matching engine, prioritizing zero-click answers for practical queries (e.g., border hours) and predictive routing for destinations.
- **Expansion (Mobile):** The search icon expands into a full-width overlay when tapped, taking over the Header temporarily to remove distractions while typing.
- **Visibility (Desktop):** The search input is always visible. It never hides behind an icon, ensuring users know they can query at any time without an extra click.

## 8. Scroll Behavior

- **Desktop (Sticky & Condensed):** The Header persists at the top of the viewport on scroll but physically shrinks. The padding is reduced, and the "Independent Guide" trust label fades out, maximizing the vertical reading space for the actual content.
- **Mobile (Smart Scroll):** To preserve precious vertical space, the mobile Header slides out of view when the user scrolls down to read. The moment the user scrolls up (indicating a desire to navigate), the Header instantly slides back into view.

## 9. Route Context

When a traveler is deeply immersed in a destination or route page:
- The main Header remains structurally identical (for predictability).
- **Contextual Sub-Bar:** A secondary navigation bar docks immediately underneath the Header on scroll. If the user is reading "Seven Lakes," this sub-bar provides sibling links: *Overview | Routes | Best Time | Things to Do*. This allows rapid movement within a topic without using the global Header.

## 10. Trust

Trust is communicated immediately but quietly. 
Next to the Atlas logo, a plain, unstyled text string reads "Independent Guide". There are no flashy badges, no "100% Verified" shields, and no graphical seals of approval. True confidence is quiet. It tells the user exactly what the site is, separating it from tour operators and booking marketplaces without adding visual clutter.

## 11. Accessibility

- **Semantics:** The Header uses strict HTML5 `<header>` and `<nav>` elements.
- **ARIA:** `aria-label="Primary navigation"` applied to the main block.
- **Keyboard Navigation:** Strict, logical tab order: Logo → Primary Links → Search Input → Utility Link.
- **Focus States:** Every interactive element features a high-contrast focus ring when navigated via keyboard.
- **Screen Readers:** The mobile hamburger menu and search overlays use correct `aria-expanded` and `aria-hidden` attributes to trap focus and announce state changes.

## 12. Performance

Designed for travelers in transit with poor 3G connections (or worse).
- **Zero Heavy Frameworks:** The Header renders using pure HTML/CSS.
- **Inline Assets:** The logo and icons (Search, Hamburger) are inline SVGs. There are no external image requests blocking the Header from rendering.
- **No JS Dependency for Display:** The desktop Header functions perfectly with JavaScript disabled. Mobile menu toggles rely on minimal vanilla JS or CSS-only techniques.

## 13. Anti-Patterns

Atlas must **NEVER** do the following in the Header:

- **No giant dropdowns (Mega-menus):** They hide content, are prone to hover-intent errors, and overwhelm the user.
- **No promotional banners:** "Sale," "Discount," or "Featured Tour" banners destroy editorial independence.
- **No flashing alerts:** Critical route updates belong in a Status Banner inside the page content, not blinking in the global Header.
- **No countdowns:** We do not manufacture artificial urgency.
- **No ads:** Zero third-party display networks.
- **No autoplay:** No embedded media or animated GIFs in the Header.
- **No dark patterns:** The Home link (Logo) is always visible. The search is never hidden behind a misleading icon.
