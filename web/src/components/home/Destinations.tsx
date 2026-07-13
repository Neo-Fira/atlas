import { Section } from "@/components/layout/Section";
import { DifficultyIndicator } from "@/components/ui/DifficultyIndicator";
import { RealityStatement } from "@/components/ui/RealityStatement";

export function Destinations() {
  const destinations = [
    {
      title: "Seven Lakes (Haft Kul)",
      focus: "Village culture, multi-lake progression.",
      reality: "The final lakes require rough mountain roads.",
      difficulty: {
        driving: "High",
        walking: "Moderate",
        altitude: "2,139m to 3,139m",
        familyFriendly: "Yes (up to 4th lake)"
      }
    },
    {
      title: "Iskanderkul",
      focus: "Dramatic single lake, Dushanbe access.",
      reality: "There is little mobile signal.",
      difficulty: {
        driving: "Low",
        walking: "Low",
        altitude: "2,195m",
        familyFriendly: "Yes"
      }
    },
    {
      title: "The Fann Mountains",
      focus: "Trekking, altitude, deep nature.",
      reality: "High passes are snow-blocked until late June.",
      difficulty: {
        driving: "High",
        walking: "High",
        altitude: "3,000m to 5,000m+",
        familyFriendly: "No"
      }
    },
    {
      title: "Panjakent",
      focus: "Border hub, ancient history, logistics.",
      reality: "There are almost no card payments.",
      difficulty: {
        driving: "Low",
        walking: "Low",
        altitude: "1,000m",
        familyFriendly: "Yes"
      }
    }
  ];

  return (
    <Section id="destinations" className="py-24 md:py-32">
      <div className="mb-20 max-w-2xl">
        <h2 className="text-4xl font-medium tracking-tighter text-brand md:text-5xl">Key Destinations.</h2>
        <p className="mt-8 text-xl font-light leading-relaxed text-text-muted">
          Choose your focus. Every destination demands a different level of time, preparation, and physical effort.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
        {destinations.map((dest) => (
          <article key={dest.title} className="group cursor-pointer flex flex-col">
            <h3 className="text-3xl font-medium tracking-tight text-brand transition-opacity group-hover:opacity-70">{dest.title}</h3>
            <p className="mt-4 text-lg font-light text-text-muted">{dest.focus}</p>
            
            <div className="mt-12">
              <RealityStatement>{dest.reality}</RealityStatement>
            </div>
            
            <div className="mt-12">
              <DifficultyIndicator 
                driving={dest.difficulty.driving}
                walking={dest.difficulty.walking}
                altitude={dest.difficulty.altitude}
                familyFriendly={dest.difficulty.familyFriendly}
              />
            </div>
            
            <div className="mt-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand transition-opacity group-hover:opacity-70">
                Explore Destination
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
