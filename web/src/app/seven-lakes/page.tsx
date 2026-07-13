import { Section } from "@/components/layout/Section";
import Image from "next/image";
import { RouteSnapshot } from "@/components/ui/RouteSnapshot";
import { DifficultyIndicator } from "@/components/ui/DifficultyIndicator";
import { RealityStatement } from "@/components/ui/RealityStatement";
import { CostBreakdown } from "@/components/ui/CostBreakdown";
import { WarningBox } from "@/components/ui/WarningBox";
import { TrustBox } from "@/components/ui/TrustBox";

export default function SevenLakesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero */}
      <Section className="py-24 md:py-32">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:gap-24">
          <div className="flex-1">
            <h1 className="text-6xl font-medium leading-[1.05] tracking-tighter text-brand sm:text-7xl lg:text-[6.5rem]">
              Seven Lakes <br /> (Haft Kul).
            </h1>
            <p className="mt-10 max-w-2xl text-xl font-light leading-relaxed text-text-muted md:text-2xl">
              A 20-kilometer valley climbing through seven distinct alpine lakes, requiring navigation of a deteriorating single-track mountain road devoid of modern infrastructure.
            </p>
          </div>
          <div className="w-full lg:w-5/12">
             <RouteSnapshot 
               time="1-2 Days" 
               cost="$15-60 (Transport)" 
               season="May-Oct" 
               difficulty="High (Driving)" 
               status="Road open to Lake 6" 
             />
          </div>
        </div>
        
        <div className="relative mt-24 h-[50vh] w-full overflow-hidden lg:h-[75vh]">
          <Image 
            src="/seven-lakes.jpg" 
            alt="Lake Mijgon, the first of the Seven Lakes in Tajikistan, showing steep arid slopes dropping into turquoise water." 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      </Section>

      {/* 2. Route Suitability & 3. Reality Check */}
      <Section className="border-t border-border py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="mb-12 text-4xl font-medium tracking-tighter text-brand md:text-5xl">The Reality Check.</h2>
            <div className="prose prose-lg prose-brand max-w-none text-xl font-light leading-relaxed text-text-muted">
              <p>
                Haft Kul is not a manicured nature reserve; it is the Shing Valley, a remote, avalanche-prone corridor where local Tajik villagers depend on a single unpaved road. 
              </p>
              <p>
                The asphalt from Panjakent ends completely before Lake 1 (Mijgon). From Lake 1 to Lake 4 (Nofin), the road is corrugated gravel, passable by standard sedans (Opels/Daewoos) in dry conditions, though at maximum speeds of 15 km/h. 
              </p>
              <p>
                <strong>Past Lake 4, the route becomes a severe single-track cut into the cliff face.</strong> A 4x4 (UAZ, Niva, Land Cruiser) is highly recommended. Do not attempt to drive a rental sedan to Lake 6 after heavy rain; the mud on the steep switchbacks will leave you stranded.
              </p>
              <p>
                There is zero mobile signal (Tcell/Megafon/Zet) past the village of Shing. Emergency calls will fail. You must carry sufficient TJS (Somoni) in small denominations from Panjakent, as card payments and ATMs do not exist here.
              </p>
            </div>
            
            <div className="mt-16">
               <RealityStatement>Signal dies at Shing village. If your car breaks down at Lake 5, you are walking back to Lake 4 for help.</RealityStatement>
            </div>
            
            <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-medium text-brand">Who is this for?</h3>
                <ul className="flex flex-col gap-4 text-lg font-light text-text-muted">
                  <li className="flex gap-4"><span className="text-brand">→</span> Travelers comfortable with basic homestays (drop toilets, bucket showers).</li>
                  <li className="flex gap-4"><span className="text-brand">→</span> Photographers seeking immediate high-altitude access without multi-day trekking.</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-xl font-medium text-brand">Who should reconsider?</h3>
                <ul className="flex flex-col gap-4 text-lg font-light text-text-muted">
                  <li className="flex gap-4"><span className="text-brand">→</span> Nervous drivers or those prone to severe vertigo on cliff-edge roads.</li>
                  <li className="flex gap-4"><span className="text-brand">→</span> Travelers requiring reliable electricity, Wi-Fi, or flush toilets.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 lg:pl-16">
            <DifficultyIndicator 
              driving="High (4x4 required past Lake 4)" 
              walking="Low (1.5hr hike to Lake 7)" 
              altitude="1,640m to 2,332m" 
              familyFriendly="Yes (Logistically up to Lake 4)" 
            />
          </div>
        </div>
      </Section>

      {/* 4. Route Snapshot (How to get there) */}
      <Section className="border-t border-border bg-surface-muted py-24 md:py-32">
         <h2 className="mb-16 text-4xl font-medium tracking-tighter text-brand md:text-5xl">Logistics & Access.</h2>
         <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
           <article className="group">
             <h3 className="text-2xl font-medium text-brand">The Standard Approach (From Panjakent)</h3>
             <p className="mt-6 text-lg font-light leading-relaxed text-text-muted">
               Panjakent is the mandatory staging ground. Shared taxis (mostly UAZ minivans or older Opels) depart sporadically from the main Panjakent bazaar when full. 
               <br/><br/>
               Expect to pay 50–70 TJS per seat to Lake 4, taking roughly 1.5 to 2 hours. Hiring a private driver costs approximately 400–600 TJS for a day trip, giving you control over photo stops.
             </p>
             <span className="mt-10 inline-block border-b border-brand pb-1 text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-70 cursor-pointer">
               [Placeholder: Complete Panjakent Transport Guide]
             </span>
           </article>
           <article className="group">
             <h3 className="text-2xl font-medium text-brand">From Samarkand (Uzbekistan)</h3>
             <p className="mt-6 text-lg font-light leading-relaxed text-text-muted">
               Cross the Jartepa border on foot (opens 08:00). Take a shared taxi to Panjakent (15 mins, 20 TJS). From Panjakent, switch transport to head south into the Shing Valley.
               <br/><br/>
               It is entirely possible to leave Samarkand at 08:00 and be eating lunch at Lake 4 by 13:00, assuming border queues are under 45 minutes.
             </p>
             <span className="mt-10 inline-block border-b border-brand pb-1 text-sm font-semibold uppercase tracking-widest text-brand transition-opacity hover:opacity-70 cursor-pointer">
               [Placeholder: Jartepa Border Crossing Guide]
             </span>
           </article>
         </div>
      </Section>

      {/* 5. Journey Through The Lakes */}
      <Section className="border-t border-border py-24 md:py-32">
        <h2 className="mb-24 text-4xl font-medium tracking-tighter text-brand md:text-5xl">The Timeline.</h2>
        <div className="ml-4 max-w-4xl border-l border-border pl-8 md:pl-16">
          
          <div className="relative mb-24">
            <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand md:-left-[73px]"></span>
            <h3 className="text-3xl font-medium text-brand">Lake 1: Mijgon (1,640m)</h3>
            <p className="mt-6 text-xl font-light leading-relaxed text-text-muted">
              You will pass the village of Shing, where the asphalt definitively ends. 
              The road immediately begins a steep, corrugated dirt climb. Mijgon is visually stunning due to its hypersaturated turquoise color, driven by high mineral content. 
              The village here clings to the steep slopes.
            </p>
          </div>

          <div className="relative mb-24">
            <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-brand bg-surface md:-left-[73px]"></span>
            <h3 className="text-3xl font-medium text-brand">Lake 4: Nofin (1,820m)</h3>
            <p className="mt-6 text-xl font-light leading-relaxed text-text-muted">
              After passing Soya (Lake 2) and Gushor (Lake 3), the road flattens slightly along the edge of Nofin, the longest lake (over 2km). 
              <br/><br/>
              <strong>Logistical Hub:</strong> This is where most standard sedans stop. It holds the highest concentration of homestays (e.g., Najmuddin&apos;s, Juma&apos;s). Electricity is generated via micro-hydro, meaning lights work, but high-draw devices (like hair dryers) will fail.
            </p>
          </div>
          
          <div className="relative mb-24">
            <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-brand bg-surface md:-left-[73px]"></span>
            <h3 className="text-3xl font-medium text-brand">Lake 6: Marguzor (2,140m)</h3>
            <p className="mt-6 text-xl font-light leading-relaxed text-text-muted">
              The drive from Lake 4 to Lake 6 is a punishing, narrow 4x4 track requiring navigation of steep switchbacks and blind corners. 
              Marguzor is the largest lake. There is a small village and basic homestay infrastructure here. All driving ends just beyond this point.
            </p>
          </div>
          
          <div className="relative">
            <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand md:-left-[73px]"></span>
            <h3 className="text-3xl font-medium text-brand">Lake 7: Hazorchashma (2,332m)</h3>
            <p className="mt-6 text-xl font-light leading-relaxed text-text-muted">
              <strong>Access:</strong> Foot or donkey only. The hike from Lake 6 takes approximately 1 to 1.5 hours along a rocky, unshaded path (pack water). 
              Hazorchashma (&quot;Thousand Springs&quot;) is a wide, quiet alpine bowl marking the end of the valley route.
            </p>
          </div>

        </div>
      </Section>

      {/* 6. Practical Info & 7. What Can Change */}
      <Section className="border-t border-border py-24 md:py-32">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 text-4xl font-medium tracking-tighter text-brand md:text-5xl">Homestays & Costs.</h2>
            <p className="mb-12 text-lg font-light leading-relaxed text-text-muted">
              Do not expect Booking.com. You show up, or have a driver call ahead via landline/satellite. 
              Standard rates are $15–$20 USD (payable in TJS) per person, which almost always includes a heavy dinner (Plov/Shorpo) and a basic breakfast (Non, eggs, kefir, jam). 
              <br/><br/>
              Rooms are communal, sleeping on thick mats (kurpacha) on the floor. Toilets are outhouses. Bring your own toilet paper and hand sanitizer.
            </p>
            <CostBreakdown 
              transport="400-600 TJS (Private 4x4 from Panjakent)" 
              food="Included in Homestay rate" 
              entrance="None" 
              optional="150-200 TJS (Nightly Homestay)" 
            />
          </div>
          
          <div>
            <h2 className="mb-12 text-4xl font-medium tracking-tighter text-brand md:text-5xl">What Can Change.</h2>
            <WarningBox>Heavy rain immediately shuts down the road between Lake 4 and 6 due to mud and rockfall risks.</WarningBox>
            <WarningBox>Water levels fluctuate aggressively. In late Autumn, Lake 1 can recede into a mudflat.</WarningBox>
            <WarningBox>By mid-October, night temperatures drop below freezing. Homestays have limited heating (usually a single wood stove in a common room).</WarningBox>
          </div>
        </div>
      </Section>

      {/* 8. Responsible Visiting */}
      <Section className="border-t border-border bg-surface-muted py-24 md:py-32">
        <div className="max-w-5xl">
          <h2 className="mb-16 text-4xl font-medium tracking-tighter text-brand md:text-5xl">Responsible Visiting.</h2>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 text-xl font-light leading-relaxed text-text-muted">
            <div>
              <h3 className="mb-6 font-medium text-brand">Stay the Night</h3>
              <p>Day-tripping from Panjakent funnels money only to drivers. Staying in a homestay at Lake 4 or 6 injects vital cash directly into the isolated Shing Valley economy.</p>
            </div>
            <div>
              <h3 className="mb-6 font-medium text-brand">The Trash Crisis</h3>
              <p>There is zero municipal waste collection in Haft Kul. Locals burn or bury trash. If you bring plastic water bottles or wrappers into the valley, you must carry them back to Panjakent.</p>
            </div>
            <div>
              <h3 className="mb-6 font-medium text-brand">Modesty in the Villages</h3>
              <p>Shing Valley is a conservative Islamic community. Walking in hiking shorts or tank tops is considered highly disrespectful. Wear long trousers and keep shoulders covered.</p>
            </div>
            <div>
              <h3 className="mb-6 font-medium text-brand">Photography Etiquette</h3>
              <p>Never photograph local women or children washing clothes in the lake or working without explicitly asking permission first. Often, the answer will be no. Respect it.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. Related Guides & 10. Sources */}
      <Section className="border-t border-border py-24 md:py-32">
         <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
           <div className="lg:col-span-6">
             <h2 className="mb-12 text-3xl font-medium tracking-tighter text-brand">Trust & Verification.</h2>
             <TrustBox 
               verified="July 2026" 
               source="Field verification + topological data." 
               confidence="High (Altitudes subject to slight seasonal fluctuation)" 
             />
           </div>
         </div>
      </Section>
    </main>
  );
}
