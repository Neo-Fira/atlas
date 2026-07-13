# Atlas Design System: Version 1.0

This document defines the permanent component library for Atlas Version 1.0. It dictates the structural, behavioral, and narrative building blocks of the platform. Every future page in Atlas is built exclusively from this system. 

This is not a UI or visual styling document; it is the structural framework designed to support the Atlas philosophy of truth, clarity, and trust.

---

## 1. Design System Philosophy

Every component in this system must adhere to the following principles:

- **Form Follows Truth:** Components exist to make practical realities—no matter how harsh—completely legible. Structure must never obscure uncertainty, difficulty, or cost.
- **Modularity for Decision-Making:** A component earns its place by helping a traveler make a decision. If it only provides decoration, it is discarded.
- **Trust Through Predictability:** Consistent layout and hierarchy train the user to know exactly where to find critical facts (e.g., always finding the "Sources" block at the bottom of a claim). Predictability breeds trust.
- **Radical Clarity:** The system uses distinct boundaries and spacing to reduce cognitive load, ensuring comprehension for travelers in stressful, unfamiliar, or low-bandwidth environments.

---

## 2. Layout System

- **Page Widths:** A strictly constrained central reading column. Text must never stretch across the screen, ensuring optimal line length and reading comfort.
- **Spacing Philosophy:** Generous, intentional spacing between distinct sections (macro-spacing) to prevent information overload. Tight spacing (micro-spacing) is reserved for intimately connected data points (e.g., a time and a distance).
- **Vertical Rhythm:** Pages flow from the immediate answer (Snapshot) to context (The Reality) to logistics (The Sequence) to alternatives.
- **Content Hierarchy:** Structure follows intent: Title → Immediate Takeaway/Answer → Context/Explanation → Specific Logistics/Facts → Next Action.
- **Reading Comfort:** Paragraphs are kept short. Bulleted lists are heavily favored over dense text blocks for logistical information.
- **Mobile-First Behavior:** Layouts are designed to stack vertically by default. Complex desktop arrangements (like side-by-side matrices) cleanly transform into stacked cards on mobile without requiring horizontal scrolling or panning.

---

## 3. Component Library

### Header
- **Purpose:** Provide persistent access to primary navigation and search.
- **User problem:** "How do I find a different section or search for my specific problem?"
- **Behavior:** Remains accessible at the top of the screen; condenses on scroll to maximize reading area.
- **Content rules:** Must only contain the primary task sections (Explore, Plan, Routes, Guides, My Trip) and Search.
- **Variants:** Standard, Condensed (on scroll).

### Navigation
- **Purpose:** Allow movement between sibling decisions within a specific section.
- **User problem:** "Where am I, and what are my related options?"
- **Behavior:** Acts as a secondary menu specific to the current domain (e.g., filtering a list of guides).
- **Content rules:** Labels must be exact, task-oriented, and short.
- **Variants:** Section Navigation, In-Page Anchor Navigation.

### Footer
- **Purpose:** Anchor the site with institutional trust links and secondary utilities.
- **User problem:** "Who runs this, what are the policies, and how do I contact them?"
- **Behavior:** Sits at the absolute bottom of every page.
- **Content rules:** Must contain links to Editorial Standards, Independence Disclosures, Corrections Policy, and Terms.

### Hero
- **Purpose:** Establish the immediate context and primary answer for the page.
- **User problem:** "Am I in the right place, and what is the main takeaway?"
- **Behavior:** Sits below the header. It does not auto-rotate or distract.
- **Content rules:** Must include a clear, descriptive Title and a 1-2 sentence immediate answer or summary. Photography must accurately depict reality, not a manipulated ideal.
- **Variants:** Destination Hero, Route Hero, Guide Hero.

### Search
- **Purpose:** Provide instant, intent-matched answers.
- **User problem:** "I have a specific question and want the answer right now."
- **Behavior:** Input field that predicts and suggests zero-click answers or direct links to canonical pages.
- **Content rules:** Placeholder text should indicate the type of specific queries supported (e.g., "Search routes, borders, or guides...").

### Destination Card
- **Purpose:** Summarize a place so a user can decide if they want to learn more.
- **User problem:** "Is this place worth clicking into?"
- **Behavior:** Acts as a clickable entry point in grids or lists.
- **Content rules:** Must include the name, region, primary draw, and a realistic time commitment.
- **Variants:** Standard Grid Card, Compact List Card.

### Route Card
- **Purpose:** Summarize a journey between two points.
- **User problem:** "How long does it take to get there, and what is the transport?"
- **Behavior:** Clickable entry point for route guides.
- **Content rules:** Must explicitly state Origin, Destination, Time Range, and Mode of Transport.

### Guide Card
- **Purpose:** Present a practical question and its corresponding guide.
- **User problem:** "Where do I find information about visas or money?"
- **Behavior:** Entry point to practical guides.
- **Content rules:** Title must be phrased as the exact practical problem it solves.

### Comparison Card
- **Purpose:** Display two or more competing choices side-by-side.
- **User problem:** "Should I do A or B?"
- **Behavior:** Presents criteria in a strictly aligned format so differences are immediately obvious.
- **Content rules:** Must use identical criteria for both options. No biased manipulation.

### Itinerary Card
- **Purpose:** Summarize a complete, sequenced trip.
- **User problem:** "Does this plan fit my timeframe and pace?"
- **Behavior:** Clickable entry point to a full trip plan.
- **Content rules:** Must state Duration, Pace (e.g., "Fast," "Relaxed"), Starting Point, and Key Stops.

### Timeline
- **Purpose:** Visualize a sequence of events across time.
- **User problem:** "What does this day actually look like hour by hour?"
- **Behavior:** A vertical or horizontal progression showing dependencies.
- **Content rules:** Must include realistic time blocks (including waiting and transport).
- **Variants:** Day-Level Timeline, Multi-Day Timeline.

### Route Steps
- **Purpose:** Break down a physical journey into geographical segments.
- **User problem:** "Where do we stop, and where does the road get bad?"
- **Behavior:** A list of sequential nodes.
- **Content rules:** Must include distance, time, and road conditions for each segment.

### Quick Facts
- **Purpose:** Provide a rapid, scannable overview of essential data.
- **User problem:** "Give me the basics without making me read paragraphs."
- **Behavior:** Usually placed near the top of the page, acting as an executive summary.
- **Content rules:** Data points only (e.g., Best Time, Altitude, Currency).

### Status Banner
- **Purpose:** Communicate critical, time-sensitive changes.
- **User problem:** "Is this route open right now?"
- **Behavior:** Injects itself at the top of the relevant content, highly visible.
- **Content rules:** Must state the exact status, the date of the update, and the source.
- **Variants:** Warning (Closed/Danger), Advisory (Delays), Resolved.

### Trust Box
- **Purpose:** Explicitly state the provenance of an important claim.
- **User problem:** "How do I know this is true?"
- **Behavior:** Sits adjacent to the claim it supports.
- **Content rules:** Must contain a verification date and the source (e.g., "Verified via Border Authority, July 2026").
- **Variants:** Verified Fact, Editorial Judgment, Contributor Account.

### Warning Box
- **Purpose:** Highlight safety, logistical, or financial risks.
- **User problem:** "What could go wrong here?"
- **Behavior:** Highly distinct framing to ensure it is not skipped.
- **Content rules:** Must be factual, specific, and offer a mitigation strategy.

### Tip Box
- **Purpose:** Offer practical, insider advice that smooths the journey.
- **User problem:** "What do only the locals or experienced travelers know?"
- **Behavior:** Sits alongside relevant logistical content.
- **Content rules:** Must be actionable and highly specific (e.g., "Bring exact change in TJS for the toll").

### Source Block
- **Purpose:** Provide a bibliography for the page's assertions.
- **User problem:** "Where did Atlas get this information?"
- **Behavior:** Located at the bottom of the page or guide.
- **Content rules:** Links to official documents, named experts, or date of field verification.

### Cost Breakdown
- **Purpose:** Demystify the total financial requirement of a trip.
- **User problem:** "How much will this really cost, including hidden fees?"
- **Behavior:** A structured list or table of expenses.
- **Content rules:** Must separate mandatory costs (visas, transport) from optional costs (tips, meals).

### Difficulty Indicator
- **Purpose:** Set clear physical and mental expectations.
- **User problem:** "Am I fit enough to do this?"
- **Behavior:** A visual or text-based scale.
- **Content rules:** Must explain *why* it is difficult (e.g., "High altitude," "Rough off-road driving").

### Route Snapshot
- **Purpose:** The ultimate executive summary for a route page.
- **User problem:** "Can I do this route today?"
- **Behavior:** Sits immediately under the Route Hero.
- **Content rules:** Combines Time, Cost, Transport Mode, and Current Condition into one block.

### Gallery
- **Purpose:** Provide visual proof of the reality of a place.
- **User problem:** "What does this actually look like?"
- **Behavior:** A contained collection of images.
- **Content rules:** Images must be captioned with the location, the season, and the context. No heavy filters.

### FAQ
- **Purpose:** Address specific, recurring traveler anxieties.
- **User problem:** "I have a specific worry that wasn't answered in the main text."
- **Behavior:** An expandable list of questions and concise answers.
- **Content rules:** Questions must be phrased exactly how travelers ask them. Answers must be direct.

### CTA (Call to Action)
- **Purpose:** Drive the user to the next logical step in their planning.
- **User problem:** "I've read this, now what do I do?"
- **Behavior:** A distinct interaction point.
- **Content rules:** Label must clearly describe the outcome (e.g., "Read the Border Guide", not "Click Here").

### Save Trip
- **Purpose:** Allow the user to retain a plan for offline or later use.
- **User problem:** "I need to access this when I lose internet in the mountains."
- **Behavior:** Creates a lightweight, offline-accessible trip brief.
- **Content rules:** Must indicate that the save is successful and explain how to access it offline.

### Booking Handoff
- **Purpose:** Transition the user to a commercial operator transparently.
- **User problem:** "I want to hire someone to do this."
- **Behavior:** A highly structured summary box preceding the external link.
- **Content rules:** Must state what is included, what is excluded, the total price, and clearly label the action as an "Enquiry" or "Handoff", maintaining Atlas's editorial independence.

### Related Content
- **Purpose:** Guide the user to contextual next steps.
- **User problem:** "What else relates to this?"
- **Behavior:** Appears at the end of the primary content.
- **Content rules:** Links must be strictly relevant to the current geography or task. No random articles.

### Breadcrumbs
- **Purpose:** Ground the user within the Information Architecture.
- **User problem:** "Where am I within the site, and how do I go up a level?"
- **Behavior:** Sits quietly above the Hero title.
- **Content rules:** Must reflect the exact hierarchical path (e.g., Explore > Regions > Fann Mountains > Seven Lakes).

---

## 4. Content Blocks

These are the reusable narrative structures that populate the components above.

- **Who is this for?**: A direct statement identifying the ideal traveler profile (e.g., "Independent travelers comfortable with basic homestays").
- **Who should reconsider?**: An anti-sales pitch identifying who will not enjoy this (e.g., "Those requiring private bathrooms or suffering from severe motion sickness").
- **Reality Check**: A blunt statement dispelling a common myth or romanticized expectation.
- **Best Time**: A nuanced breakdown of seasonality, emphasizing when *not* to go due to mud, snow, or closures.
- **Getting There**: The logistical hook connecting a destination to its route pages.
- **Costs**: The financial reality, always expressed in ranges and specifying the currency required.
- **What Can Change**: Explicit acknowledgment of variables (e.g., "Border queues fluctuate wildly on Sundays").
- **Alternatives**: Providing a "Plan B" (e.g., "If the road is washed out, visit X instead").
- **Responsible Visiting**: Specific cultural rules (clothing, photography, interaction) to protect the dignity of the local community.
- **Sources**: The bibliography block ensuring Atlas remains accountable.

---

## 5. Mobile Components

Mobile behavior in Atlas prioritizes the traveler already in transit.

- **Sticky Context:** Critical context (like the current status of a route) sticks to the top of the screen on scroll.
- **Thumb-Friendly Touch Targets:** All interaction points (CTAs, Navigation) are oversized to accommodate use in a moving vehicle.
- **Expandable Secondary Info:** Detailed logistics that are not immediately urgent are collapsed by default to save vertical space, but are clearly labeled for expansion.
- **Offline Triggers:** Explicit, highly visible interactions allowing the user to "Save for Offline" before they lose connectivity.

---

## 6. Accessibility Principles

Atlas must be usable by everyone, everywhere.

- **Semantic Hierarchy:** The structure must perfectly translate to screen readers. A logical, sequential heading structure (H1, H2, H3) is mandatory.
- **High Contrast Dependence:** Essential information must be decipherable entirely through contrast and spacing, never relying on a specific hue to communicate meaning.
- **Unambiguous Text:** Links and buttons must describe exactly what they do.
- **Keyboard Navigability:** Every component, especially expanding blocks and carousels, must be fully navigable without a pointer.

---

## 7. Performance Principles

Atlas is designed for environments with poor infrastructure.

- **Content Precedes Decoration:** Text and structural information must render instantly.
- **Lazy Loading Mandatory:** Galleries, maps, and heavy media must strictly lazy-load only when entering the viewport.
- **Graceful Degradation:** If an interactive component fails to load over a 3G connection, its core factual text must still display seamlessly.
- **Cache-Ready:** Components representing itineraries and guides must be structurally lightweight so they can be easily cached by the browser for offline retrieval.

---

## 8. Future Components (Excluded from MVP)

These components are theoretically sound but carry maintenance or trust risks that disqualify them from Version 1.0.

- **Public User Reviews:** (Requires a mature moderation and verification system to prevent manipulation).
- **Real-Time Capacity/Availability Indicators:** (Requires robust API integration with local operators, which does not currently exist reliably).
- **Community Forums / Q&A Modules:** (Requires intensive moderation to prevent the spread of unverified facts).
- **Dynamic Weather Widgets:** (Can provide a false sense of security; historical seasonal guidance is more reliable for MVP).
- **Interactive Multi-Day Trip Builders:** (Too complex for MVP; pre-built curated itineraries serve the immediate need better).
