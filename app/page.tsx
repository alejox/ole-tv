import { Devices } from "@/components/devices";
import { Distributors } from "@/components/distributors";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Devices />
      <Plans />
      <Distributors />
      <Faq />
      <FinalCta />
    </main>
  );
}
