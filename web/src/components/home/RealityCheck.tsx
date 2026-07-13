import { Section } from "@/components/layout/Section";
import { WarningBox } from "@/components/ui/WarningBox";

export function RealityCheck() {
  const guides = [
    {
      title: "Border Crossing Guide",
      description: "Jartepa / Sarazm operations, strict document lists, and pedestrian crossing realities.",
      warning: "Border waiting times vary wildly. Budget 1-3 hours.",
    },
    {
      title: "Money & Costs",
      description: "The absolute necessity of cash (TJS/USD), where to exchange, and hidden transport costs.",
      warning: "Cash is essential. ATMs are extremely rare outside Panjakent.",
    },
    {
      title: "Connectivity",
      description: "Where SIM cards fail, why offline maps are mandatory, and how to communicate.",
      warning: "Do not rely on roaming data in the mountains.",
    },
    {
      title: "Seasons & Weather",
      description: "When routes become impassable. Do not attempt high passes in April.",
      warning: "Road conditions can change immediately after heavy rain.",
    }
  ];

  return (
    <Section id="reality-check" className="border-t border-border py-24 md:py-32">
      <div className="mb-20 max-w-2xl">
        <h2 className="text-4xl font-medium tracking-tighter text-brand md:text-5xl">The Reality Check.</h2>
        <p className="mt-8 text-xl font-light leading-relaxed text-text-muted">
          Do not attempt the corridor without understanding the logistical realities. Inspiration is useless without preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
        {guides.map((guide) => (
          <div key={guide.title} className="flex flex-col">
            <h3 className="text-2xl font-medium tracking-tight text-brand">{guide.title}</h3>
            <p className="mt-4 text-lg font-light text-text-muted">{guide.description}</p>
            
            <WarningBox>{guide.warning}</WarningBox>
            
            <div className="mt-12">
              <span className="cursor-pointer text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-70">
                Read Guide
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
