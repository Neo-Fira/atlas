# Information Architecture

## Architectural Mandate

Atlas is organized around a traveler’s decisions, not around an operator’s inventory. Every page has one primary user problem, a clear geographic and topical home, and a defined relationship to the next useful decision.

The architecture must make practical truth easy to reach on a phone, support search entry from highly specific questions, and preserve editorial independence from any commercial relationship. It must not make the traveler understand Atlas’s internal taxonomy before finding help.

## 1. Product Structure

Atlas has eight major product sections. These are stable top-level concepts, not a promise that all sections must be equally populated at launch.

| Section | Primary user problem | Core objects |
| --- | --- | --- |
| **Explore** | “Where in Tajikistan might suit me?” | Regions, destinations, places, themes |
| **Plan a Trip** | “How do I turn interest into a viable journey?” | Trip plans, itineraries, route collections, seasonal plans |
| **Routes & Transport** | “How do I get from here to there, and is it realistic?” | Routes, transport guides, border guides, route updates |
| **Things to Do** | “What can I do that fits my time and interests?” | Experiences, hikes, walks, cultural visits, responsible activities |
| **Travel Guides** | “What do I need to know before or during travel?” | Practical guides, seasonal guidance, FAQs, checklists, travel tips |
| **Compare & Choose** | “Which option is right for me?” | Comparisons, suitability guides, cost guides, decision guides |
| **Services** | “Who can help me carry out this plan?” | Operator profiles, guide profiles, accommodation profiles, service comparisons |
| **My Trip** | “What do I need right now?” | Saved places, saved plans, trip brief, updates, issue guidance |

### Product rules

- **Explore is geographic.** It answers where to go, not how to sell a tour.
- **Plan is time-based.** It connects multiple places into a realistic sequence.
- **Routes are directional.** A route page answers travel between two meaningful nodes; it is not a duplicate destination page.
- **Things to Do are activity-based.** An experience page answers what participation requires and whether it fits the traveler.
- **Guides are question-based.** Each guide owns one enduring practical question.
- **Compare & Choose is decision-based.** It exists only where meaningful alternatives or trade-offs exist.
- **Services are accountable profiles, not a pay-to-rank directory.** Editorial recommendation, verified operational facts, and paid relationships must remain distinct.
- **My Trip is utility-based.** It should shorten time to an essential answer for a traveler already committed or in-country.

## 2. Site Hierarchy

The hierarchy is intentionally shallow. A traveler should normally reach a useful page within three levels from the home page, while search may enter directly at any depth.

```text
Atlas
├── Explore
│   ├── Tajikistan overview
│   ├── Regions
│   │   ├── Dushanbe and surrounding area
│   │   ├── Fann Mountains
│   │   ├── Panjakent and Zeravshan Valley
│   │   ├── Pamirs
│   │   ├── Khujand and northern Tajikistan
│   │   ├── Rasht Valley
│   │   ├── Khatlon
│   │   └── Gorno-Badakhshan
│   ├── Destinations
│   │   ├── Cities and towns
│   │   ├── Lakes and natural places
│   │   ├── Valleys, passes, and trails
│   │   ├── Heritage and cultural places
│   │   └── Villages and local areas
│   ├── Explore by interest
│   │   ├── Mountains and hiking
│   │   ├── Lakes and nature
│   │   ├── History and culture
│   │   ├── Food and everyday life
│   │   ├── Road journeys
│   │   ├── Quiet places
│   │   └── Family-suitable travel
│   └── Explore by travel style
│       ├── First trip to Tajikistan
│       ├── Independent travel
│       ├── Guided travel
│       ├── Short trips
│       └── Slow travel
├── Plan a Trip
│   ├── Start planning
│   ├── Trip plans by duration
│   │   ├── 1 day
│   │   ├── 2–3 days
│   │   ├── 4–7 days
│   │   ├── 8–14 days
│   │   └── 2+ weeks
│   ├── Trip plans by starting point
│   │   ├── From Dushanbe
│   │   ├── From Samarkand
│   │   ├── From Panjakent
│   │   ├── From Khujand
│   │   └── From Osh
│   ├── Trip plans by interest
│   │   ├── Fann Mountains
│   │   ├── Pamir Highway
│   │   ├── Culture and history
│   │   ├── Family travel
│   │   └── Independent travel
│   ├── Seasonal trip planning
│   │   ├── Spring
│   │   ├── Summer
│   │   ├── Autumn
│   │   └── Winter
│   └── Build and save a trip
├── Routes & Transport
│   ├── Route finder
│   ├── Popular routes
│   │   ├── Samarkand → Seven Lakes
│   │   ├── Samarkand → Panjakent
│   │   ├── Dushanbe → Iskanderkul
│   │   ├── Dushanbe → Panjakent
│   │   ├── Panjakent → Seven Lakes
│   │   ├── Dushanbe → Pamirs
│   │   └── Osh → Dushanbe
│   ├── Border crossings
│   │   ├── Uzbekistan ↔ Tajikistan
│   │   ├── Jartepa / Sarazm crossing
│   │   └── Other relevant crossings
│   ├── Transport guides
│   │   ├── Shared transport
│   │   ├── Private drivers
│   │   ├── 4×4 travel
│   │   ├── Domestic flights
│   │   └── Rail and bus connections
│   ├── Current route conditions
│   └── Route FAQs
├── Things to Do
│   ├── Activities by place
│   ├── Activities by type
│   │   ├── Day hikes and walks
│   │   ├── Multi-day trekking
│   │   ├── Lake visits
│   │   ├── Road trips
│   │   ├── Cultural visits
│   │   ├── Food experiences
│   │   └── Wildlife and nature observation
│   ├── Activities by suitability
│   │   ├── Short on time
│   │   ├── Family-suitable
│   │   ├── Low walking effort
│   │   ├── High-altitude preparedness
│   │   └── Independent-friendly
│   └── Responsible visiting guidance
├── Travel Guides
│   ├── First-time travel to Tajikistan
│   ├── Entry, visas, and documents
│   ├── Money, payments, and costs
│   ├── Connectivity and communication
│   ├── Health, safety, and altitude
│   ├── Culture, language, and etiquette
│   ├── Seasons, weather, and packing
│   ├── Accommodation and food
│   ├── Travel with children or limited mobility
│   ├── Travel updates and changes
│   ├── FAQs
│   └── Glossary
├── Compare & Choose
│   ├── Destination comparisons
│   │   ├── Seven Lakes vs Iskanderkul
│   │   ├── Fann Mountains vs Pamirs
│   │   └── Other meaningful comparisons
│   ├── Route comparisons
│   ├── Travel-style comparisons
│   │   ├── Independent vs guided
│   │   ├── Private driver vs shared transport
│   │   └── Day trip vs overnight
│   ├── Cost and time comparisons
│   └── “Is it right for me?” guides
├── Services
│   ├── How Atlas evaluates services
│   ├── Operators
│   │   ├── By region
│   │   ├── By activity type
│   │   └── Individual operator profiles
│   ├── Guides
│   │   ├── By region
│   │   └── Individual guide profiles
│   ├── Stays
│   │   ├── By place
│   │   └── Individual stay profiles
│   ├── Drivers and transport services
│   ├── Service comparisons
│   └── Report an issue with a service
├── My Trip
│   ├── Saved places
│   ├── Saved routes
│   ├── Saved plans
│   ├── Trip brief
│   ├── Current updates for saved places and routes
│   ├── Help when plans change
│   └── Feedback and corrections
├── About Atlas
│   ├── Editorial standards
│   ├── Source and verification standards
│   ├── Commercial independence and disclosures
│   ├── Corrections policy
│   ├── Responsible tourism commitments
│   └── Contact
└── Utility pages
    ├── Search
    ├── 404 / route recovery
    ├── Accessibility statement
    ├── Privacy
    └── Terms
```

### Canonical page ownership

One concept must have one canonical home. A page may be linked from many places, but it is not recreated for each section.

- A **destination page** owns the answer to “what is this place and should I go?”
- A **route page** owns “how do I travel between these points?”
- An **experience page** owns “what does doing this require and involve?”
- A **trip plan** owns “how can these places fit into a realistic sequence?”
- A **guide** owns a single practical question that applies across many pages.
- A **comparison** owns a decision between meaningful alternatives.
- A **service profile** owns accountable facts about a provider; it never owns the editorial explanation of a destination.

## 3. Navigation

### Primary navigation

Primary navigation should contain only the choices that cover a traveler’s main tasks:

1. **Explore**
2. **Plan a Trip**
3. **Routes & Transport**
4. **Travel Guides**
5. **Search**
6. **My Trip**

“Things to Do,” “Compare & Choose,” and “Services” are important destinations, but should normally be reached through Explore, Plan, search, or relevant contextual links rather than competing for permanent top-level attention. On mobile, primary navigation must preserve task labels, not substitute abstract icons or hidden taxonomy.

### Secondary navigation

Secondary navigation is local to a section and appears only when it helps the traveler move between sibling decisions.

- **Explore:** Regions, destinations, interests, travel styles.
- **Plan a Trip:** Duration, starting point, interest, season.
- **Routes & Transport:** Popular routes, borders, transport types, current conditions.
- **Travel Guides:** Before you go, while you travel, culture and etiquette, practical essentials, FAQs.
- **Things to Do:** By place, activity type, suitability.
- **Services:** Operators, guides, stays, drivers, how evaluation works.

Secondary navigation must be short, descriptive, and stable. It should never duplicate the full site tree.

### Contextual navigation

Contextual navigation is the primary way Atlas becomes useful rather than merely browsable. Every substantive page must provide a small, deliberate set of next decisions:

- **Destination pages:** how to get there, best time, things to do, suitability, nearby places, related trip plans, responsible visiting guidance.
- **Route pages:** route summary, current conditions, alternatives, border requirements if relevant, origin and destination pages, next route options, contingency guidance.
- **Experience pages:** requirements, practical preparation, location, route, alternatives, nearby stays, responsible behavior, relevant services where appropriate.
- **Trip plans:** each stop, route between stops, preparation checklist, seasonal alternatives, the plan’s assumptions, and what to do when one link fails.
- **Guide pages:** the relevant destinations, routes, comparisons, and next action—not a generic list of latest content.
- **Service profiles:** the specific routes or activities served, Atlas evaluation method, material terms, alternatives, and issue-reporting path.

Breadcrumbs communicate geographic or structural context; they must not replace task-oriented links. A page should contain one clear primary next step and no more than three to five high-value related links near its decision point.

## 4. User Entry Points

Search entry pages must answer the exact question implied by the query before introducing related content. The following entry-point families are required; each line represents an expandable cluster, not a mandate to create low-value variants.

### Destination intent

- Tajikistan travel guide
- Things to do in Tajikistan
- Best places to visit in Tajikistan
- Fann Mountains travel guide
- Seven Lakes Tajikistan
- Iskanderkul Lake
- Panjakent travel guide
- Dushanbe travel guide
- Pamir Highway travel guide
- Wakhan Valley travel guide
- Khujand travel guide
- Tajikistan with children

### Route and border intent

- Seven Lakes from Samarkand
- Samarkand to Tajikistan
- Samarkand to Panjakent
- Samarkand to Seven Lakes day trip
- Dushanbe to Iskanderkul
- Dushanbe to Panjakent
- Panjakent to Seven Lakes
- How to get to the Fann Mountains
- How to get to Iskanderkul
- Uzbekistan–Tajikistan border crossing
- Jartepa / Sarazm border crossing
- Tajikistan shared taxi guide
- Tajikistan private driver guide
- Can I drive in Tajikistan?

### Planning and suitability intent

- Tajikistan itinerary
- 7-day Tajikistan itinerary
- 10-day Tajikistan itinerary
- Tajikistan itinerary from Samarkand
- Tajikistan itinerary from Dushanbe
- Is Seven Lakes worth visiting?
- Is Iskanderkul worth visiting?
- Seven Lakes vs Iskanderkul
- Fann Mountains vs Pamirs
- Can I visit Seven Lakes in one day?
- Is Tajikistan suitable for independent travel?
- Tajikistan family travel
- Tajikistan hiking difficulty

### Practical intent

- Tajikistan visa and entry requirements
- Tajikistan border documents
- Best time to visit Tajikistan
- Tajikistan weather by month
- Tajikistan packing list
- Tajikistan costs and budget
- Cash and card payments in Tajikistan
- SIM card and internet in Tajikistan
- Tajikistan altitude guide
- Tajikistan road conditions
- Tajikistan safety guide
- Tajikistan etiquette and culture
- What to wear in Tajikistan

### Experience and booking-adjacent intent

- Seven Lakes tour from Samarkand
- Seven Lakes private driver
- Seven Lakes guided hike
- Iskanderkul day trip
- Fann Mountains trekking tour
- Tajikistan local guide
- Tajikistan tour operator comparison
- Private driver vs tour in Tajikistan
- How much does Seven Lakes cost?
- What is included in a Seven Lakes tour?

### During-trip and change-of-plan intent

- Seven Lakes weather today / current conditions
- Is the road to Iskanderkul open?
- What to do if a Tajikistan tour is cancelled
- Missed border crossing / late border crossing guidance
- Alternative to Seven Lakes in bad weather
- Dushanbe day trip alternatives
- Help if my route changes in Tajikistan

## 5. User Journeys

### First-time visitor

**Goal:** Understand whether Tajikistan is right for them and form a first realistic trip.

1. Enters through the Tajikistan overview, a regional guide, or a broad planning query.
2. Uses Explore to understand regions, travel styles, seasonality, and the difference between major destinations.
3. Moves to an “Is it right for me?” guide or comparison to test time, effort, budget, and interests.
4. Selects a trip plan by duration and starting point.
5. Reviews linked routes, practical guides, and preparation checklist.
6. Saves a plan and leaves with a clear next step: refine it, verify a variable condition, or assess services.

**Success:** The traveler has a viable outline and knows its assumptions, not merely a list of attractions.

### Traveler ready to book

**Goal:** Choose a service or arrangement with clear terms and appropriate fit.

1. Enters through a specific route, experience, or service query.
2. Sees the decision-complete page first: suitability, current constraints, total-cost range, inclusions, exclusions, timing, alternatives, and what confirmation means.
3. Uses a comparison only if there are meaningful choices.
4. Reviews accountable service profiles and clearly labeled commercial or non-commercial options.
5. Selects an option or leaves to book directly, carrying a saveable trip brief and clear preparation steps.

**Success:** The traveler understands what they are committing to, who is responsible, and what to do if it changes.

### Traveler already in Tajikistan

**Goal:** Act quickly when information is time-sensitive or a plan has changed.

1. Enters through search, a saved trip, a current route condition, or an urgent practical query.
2. Reaches a concise current-status or route page with source date, confidence, local time relevance, and essential next actions.
3. Sees the nearest viable alternatives and any necessary safety or official-source guidance.
4. Saves or shares the updated route or trip brief.

**Success:** Atlas reduces uncertainty and helps the traveler adapt without inducing false confidence.

### Independent traveler

**Goal:** Evaluate self-directed travel without being forced into a tour.

1. Enters through a destination, route, cost, or “can I do this independently?” query.
2. Uses the route page, practical guide, and comparison of independent versus guided options.
3. Reviews preparation, route realities, local etiquette, cost ranges, and conditions that make self-directed travel inappropriate.
4. Chooses an independent plan, a partial service, or a guide based on transparent trade-offs.

**Success:** The traveler can act independently where reasonable and recognizes when assistance is prudent.

### Family traveler

**Goal:** Find experiences that are realistic, comfortable, and respectful for the whole group.

1. Enters through family travel, a destination, or a short-trip query.
2. Filters or follows links to age/effort suitability, journey duration, vehicle comfort, facilities, food, safety considerations, and flexibility.
3. Compares viable destinations, routes, and overnight versus day-trip options.
4. Saves a family-appropriate plan and preparation list.

**Success:** The family can reject unsuitable plans early and choose a pace that is genuinely workable.

## 6. Internal Linking Strategy

Internal links are a decision graph, not a volume tactic. A link exists because it answers the next natural question or establishes necessary context.

### Core linking rules

1. **Link from place to action.** Every destination links to routes, things to do, seasonality, suitability, nearby places, and relevant plans.
2. **Link from route to readiness.** Every route links to origin and destination, border/transport guidance, current conditions, alternatives, and what to prepare.
3. **Link from plan to every dependency.** Every trip plan links to its stops, connecting routes, preparation requirements, assumptions, and fallback options.
4. **Link from practical question to affected decisions.** A visa, weather, packing, or safety guide links to the routes and destinations where it changes the traveler’s choice.
5. **Link comparisons bidirectionally.** A comparison links to each option; each option links back to the comparison where it is a meaningful next decision.
6. **Link services only after the decision context is clear.** A service profile links to the route or activity it serves, but an editorial destination page never defaults to one provider.
7. **Link updates only to affected pages.** A time-sensitive update must reach the routes, plans, and destinations it materially changes, with a visible date and scope.

### Required related-content modules

To prevent arbitrary linking, every core page type uses a fixed, small related-content set:

| Page type | Required links |
| --- | --- |
| Destination | Get there, best time, things to do, suitability, nearby places, trip plans |
| Route | Start, end, route conditions, transport options, border guidance, alternatives |
| Experience | Requirements, location, route, preparation, alternatives, responsible visiting |
| Trip plan | Stops, routes, assumptions, preparation, alternatives, save trip |
| Guide | Affected routes/destinations, related questions, official sources where applicable |
| Comparison | Each option, decision criteria, alternative choices, relevant plans |
| Service profile | Evaluation method, served routes/activities, terms, alternatives, issue reporting |

No page should link to another merely because both mention “Tajikistan.” Relevance, decision sequence, and geographic relationship are required.

## 7. Content Hierarchy

Content types are defined by the user problem they own. A single page may contain supporting elements from other types, but it must retain one primary type and canonical purpose.

| Content type | Primary question | Required information |
| --- | --- | --- |
| **Country overview** | “What should I understand before considering Tajikistan?” | Travel reality, regions, first decisions, seasonality, key practical links |
| **Region** | “What kind of journey does this area offer?” | Character, key places, access, season, suitability, routes, local context |
| **Destination / place** | “Should I visit this specific place?” | What it is, why go, effort, access, best time, costs, etiquette, alternatives, sources/uncertainty |
| **Route** | “How do I get between these points?” | Travel modes, time range, cost range, road/transfer reality, conditions, border needs, alternatives |
| **Experience** | “What does doing this involve?” | Duration, difficulty, requirements, location, preparation, cost range, impact, alternatives |
| **Trip plan / itinerary** | “How can I spend this amount of time well?” | Sequence, route dependencies, pace, assumptions, costs, preparation, fallback options |
| **Travel guide** | “How do I handle this practical question?” | Direct answer, applicability, date/source, steps, related decisions, official references |
| **Border guide** | “How do I cross this border responsibly and realistically?” | Eligibility caveats, documents, process, timing variability, money/connectivity, official sources, alternatives |
| **Comparison** | “Which option fits me?” | Decision criteria, honest trade-offs, best-for guidance, evidence, links to each option |
| **FAQ** | “What is the short answer to a recurring question?” | Direct answer, scope, verification date, link to canonical deeper page |
| **Checklist / travel tip** | “What should I prepare or do?” | Actionable items, applicability, priority, conditions, related guide |
| **Current update** | “What has changed and what should I do?” | Scope, observed or official source, timestamp, confidence, affected pages, next action |
| **Service profile** | “Can this provider help me?” | Accountable identity, served areas, facts, terms, source/verification status, editorial separation, issue path |
| **Firsthand perspective** | “What did a verified person experience?” | Contributor context, date, route/place, clear distinction from Atlas fact, moderation status |

### Content precedence

When pages overlap, the more specific decision page owns the answer. For example, a Seven Lakes destination page links to a Samarkand → Seven Lakes route page; it does not reproduce the complete route guide. A short FAQ answers the question and links to the canonical guide; it does not become a competing article.

## 8. Scalability

The architecture must grow from approximately 100 pages to more than 10,000 without adding new top-level sections or changing existing page meaning.

### Stable dimensions of growth

Atlas scales by combining a controlled set of dimensions:

- **Geography:** country → region → destination/place.
- **Movement:** origin → destination route, border, transport mode.
- **Time:** duration, season, current conditions.
- **Intent:** explore, plan, compare, prepare, adapt.
- **Suitability:** effort, independence, budget, family, accessibility, travel style.
- **Accountability:** editorial guide, official fact, firsthand account, service profile, update.

These dimensions can create thousands of useful pages only when each combination answers a distinct question. Atlas must never generate a page solely because two labels can be combined.

### Growth stages

**At 100 pages**, prioritize the country overview; Fann Mountains, Seven Lakes, Iskanderkul, Panjakent, Dushanbe, and Samarkand entry hubs; core routes; border guidance; practical essentials; and a small number of honest comparisons and trip plans.

**At 1,000 pages**, deepen regional and destination coverage, add route variants, activity pages, seasonal guidance, more trip durations, and carefully governed service profiles. Every new page should attach to an existing geographic and decision cluster.

**At 10,000+ pages**, expand systematically across place-level content, time-sensitive updates, recurring FAQs, accountable firsthand contributions, service profiles, and nuanced suitability paths. Growth must retain canonical ownership, structured facts, verification status, and a meaningful internal-linking path.

### Quality gates for every new page

A page may be added only when all answers are clear:

1. What exact traveler problem does it solve?
2. What is its canonical page type and geographic or topical parent?
3. What unique information does it provide that no existing page already owns?
4. What must be verified, dated, sourced, or labeled uncertain?
5. Which three to six pages should lead into it and out of it?
6. Can a traveler understand its key answer quickly on a phone and with limited connectivity?
7. Does it preserve Atlas’s independence, local dignity, and practical usefulness?

If these answers are not clear, improve an existing page rather than create a new one. This is how Atlas avoids duplicate content, navigation bloat, and the slow erosion of trust.
