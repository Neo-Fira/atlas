import { Section } from "@/components/layout/Section";
import { RouteSnapshot } from "@/components/ui/RouteSnapshot";

export function CoreCorridor() {
  return (
    <Section id="core-corridor" className="py-24 md:py-32">
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl font-medium tracking-tighter text-brand md:text-5xl">The Samarkand to Fann Mountains Corridor.</h2>
        <p className="mt-8 text-xl font-light leading-relaxed text-text-muted">
          The most reliable, verified path from Uzbekistan into Tajikistan’s high mountains. 
          Understand the logical progression before you plan your stops.
        </p>
      </div>

      <div className="mb-32">
        <RouteSnapshot 
          time="1–2 Days Transit"
          cost="$40–$150"
          season="May–October"
          difficulty="Moderate"
          status="Open (Verified July 2026)"
        />
      </div>
      
      <div className="">
        <ol className="flex flex-col gap-12 md:flex-row md:items-start lg:gap-16">
          <li className="flex flex-col relative">
            <span className="text-5xl font-light text-border mb-4">01</span>
            <span className="text-xl font-medium text-brand">Samarkand</span>
            <span className="text-base font-light text-text-muted mt-2">Uzbekistan Origin</span>
          </li>
          <li className="flex flex-col relative">
            <span className="text-5xl font-light text-border mb-4">02</span>
            <span className="text-xl font-medium text-brand">Panjakent</span>
            <span className="text-base font-light text-text-muted mt-2">Border Hub & History</span>
          </li>
          <li className="flex flex-col relative">
            <span className="text-5xl font-light text-border mb-4">03</span>
            <span className="text-xl font-medium text-brand">Seven Lakes</span>
            <span className="text-base font-light text-text-muted mt-2">Village Culture & Valleys</span>
          </li>
          <li className="flex flex-col relative">
            <span className="text-5xl font-light text-border mb-4">04</span>
            <span className="text-xl font-medium text-brand">Iskanderkul</span>
            <span className="text-base font-light text-text-muted mt-2">Dramatic Lake Access</span>
          </li>
          <li className="flex flex-col relative">
            <span className="text-5xl font-light text-border mb-4">05</span>
            <span className="text-xl font-medium text-brand">Fann Mountains</span>
            <span className="text-base font-light text-text-muted mt-2">Deep Nature & Trekking</span>
          </li>
        </ol>
        
        <div className="mt-20">
          <button type="button" className="text-sm font-semibold uppercase tracking-widest text-brand border-b-2 border-brand pb-0.5 hover:text-brand-muted hover:border-brand-muted transition-colors">
            View the Full Route Guide
          </button>
        </div>
      </div>
    </Section>
  );
}
