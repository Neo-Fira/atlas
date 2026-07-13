import { Section } from "@/components/layout/Section";
import { CostBreakdown } from "@/components/ui/CostBreakdown";
import { SeasonalTimeline } from "@/components/ui/SeasonalTimeline";

export function Itineraries() {
  const itineraries = [
    {
      title: "1 Day from Samarkand",
      pace: "Fast & highly structured",
      focus: "Seven Lakes Overview, Border transit.",
      recommendedSeasons: ["Summer", "Autumn"],
      costs: { transport: "$80", food: "$15", entrance: "$2", optional: "$0" }
    },
    {
      title: "2 Days from Samarkand",
      pace: "Balanced",
      focus: "Panjakent History & Seven Lakes Overnight.",
      recommendedSeasons: ["Spring", "Summer", "Autumn"],
      costs: { transport: "$100", food: "$40", entrance: "$5", optional: "$20" }
    },
    {
      title: "The Dushanbe Weekend",
      pace: "Relaxed",
      focus: "Iskanderkul access and short valley walks.",
      recommendedSeasons: ["Summer"],
      costs: { transport: "$150", food: "$50", entrance: "$3", optional: "$30" }
    }
  ];

  return (
    <Section id="itineraries" className="border-t border-border py-24 md:py-32">
      <div className="mb-20 max-w-2xl">
        <h2 className="text-4xl font-medium tracking-tighter text-brand md:text-5xl">Curated Itineraries.</h2>
        <p className="mt-8 text-xl font-light leading-relaxed text-text-muted">
          Realistic, sequenced plans that factor in transport, borders, and actual waiting times.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        {itineraries.map((itinerary) => (
          <article key={itinerary.title} className="group flex cursor-pointer flex-col">
            <h3 className="text-2xl font-medium tracking-tight text-brand transition-opacity group-hover:opacity-70">{itinerary.title}</h3>
            <p className="mt-4 text-lg font-light text-text-muted">{itinerary.focus} (Pace: {itinerary.pace})</p>
            
            <SeasonalTimeline recommended={itinerary.recommendedSeasons} />
            
            <CostBreakdown 
              transport={itinerary.costs.transport}
              food={itinerary.costs.food}
              entrance={itinerary.costs.entrance}
              optional={itinerary.costs.optional}
            />
            
            <div className="mt-12">
              <span className="border-b border-brand pb-1 text-sm font-semibold uppercase tracking-widest text-brand transition-opacity group-hover:opacity-70">
                View Itinerary
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
