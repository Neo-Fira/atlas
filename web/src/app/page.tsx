import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { CoreCorridor } from "@/components/home/CoreCorridor";
import { Destinations } from "@/components/home/Destinations";
import { RealityCheck } from "@/components/home/RealityCheck";
import { Itineraries } from "@/components/home/Itineraries";
import { Independence } from "@/components/home/Independence";

export default function Home() {
  return (
    <Container className="space-y-4 pb-20">
      <Hero />
      <CoreCorridor />
      <Destinations />
      <RealityCheck />
      <Itineraries />
      <Independence />
    </Container>
  );
}
