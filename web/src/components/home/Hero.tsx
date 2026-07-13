import { Section } from "@/components/layout/Section";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="py-16 md:py-32" id="hero">
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        
        {/* Typography & Anchor */}
        <div className="w-full pt-8 lg:w-7/12">
          <h1 className="text-6xl font-medium tracking-tighter text-brand sm:text-7xl lg:text-[6rem] leading-[1.05]">
            The Independent Guide to Tajikistan.
          </h1>
          
          <p className="mt-10 max-w-lg text-xl font-light leading-relaxed text-text-muted md:text-2xl">
            Practical truth, verified routes, and independent travel guidance for exploring Tajikistan.
          </p>

          <div className="mt-16 w-full max-w-lg">
            <form className="relative flex items-center border-b border-brand pb-4">
              <input 
                type="search" 
                placeholder="Search routes or guides..." 
                className="w-full bg-transparent text-3xl font-light text-brand placeholder:text-border focus:outline-none md:text-4xl"
              />
              <button type="button" className="absolute right-0 text-brand transition-opacity hover:opacity-60">
                <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <div className="mt-8 flex gap-8">
              <button type="button" className="text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-60">
                Explore Routes
              </button>
              <button type="button" className="text-sm font-medium uppercase tracking-widest text-text-muted transition-colors hover:text-brand">
                Start Planning
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Imagery */}
        <div className="relative h-[600px] w-full lg:h-[900px] lg:w-5/12 lg:-mr-[10vw]">
          <Image 
            src="/hero-fann.jpg" 
            alt="Clear turquoise alpine lake surrounded by rugged mountain peaks in the Fann Mountains" 
            fill 
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </Section>
  );
}
