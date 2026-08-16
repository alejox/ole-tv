import { Devices } from "@/components/devices";
import { Distributors } from "@/components/distributors";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";
import { Reseller } from "@/components/reseller";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Devices />
      <Plans />
      <Reseller />
      <Distributors />
      <Faq />
      <FinalCta />
    </main>
  );
}
