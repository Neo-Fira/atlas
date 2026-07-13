import { Section } from "@/components/layout/Section";
import { TrustBox } from "@/components/ui/TrustBox";

export function Independence() {
  return (
    <Section id="independence-promise" className="border-t border-border py-32 md:py-48">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-1">
          <h2 className="text-4xl font-medium tracking-tighter text-brand md:text-5xl lg:text-6xl">Our Independence Promise.</h2>
          <p className="mt-8 max-w-2xl text-2xl font-light leading-relaxed text-text-muted">
            Atlas is an independent travel companion. We do not sell our rankings, we do not hide negative realities, 
            and we prioritize your safe return over any commission.
          </p>
          <div className="mt-12 flex gap-8">
            <button type="button" className="border-b border-brand pb-1 text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-70">
              Editorial Standards
            </button>
            <button type="button" className="border-b border-brand pb-1 text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-70">
              Corrections Policy
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-auto">
          <TrustBox 
            verified="July 2026"
            source="Field verification + local operators"
            confidence="High"
          />
        </div>
      </div>
    </Section>
  );
}
