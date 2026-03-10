import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Heritage from "@/components/landing/Heritage";
import HarvestProcess from "@/components/landing/HarvestProcess";
import TastingNotes from "@/components/landing/TastingNotes";
import PurityMetrics from "@/components/landing/PurityMetrics";
import LimitedEdition from "@/components/landing/LimitedEdition";
import ArtisanStory from "@/components/landing/ArtisanStory";
import GroveImage from "@/components/landing/GroveImage";
import BottleCounters from "@/components/landing/BottleCounters";
import BlogSection from "@/components/landing/BlogSection";
import SustainablePackaging from "@/components/landing/SustainablePackaging";
import CriticReviews from "@/components/landing/CriticReviews";
import ShopFooter from "@/components/landing/ShopFooter";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Heritage />
      <HarvestProcess />
      <TastingNotes />
      <PurityMetrics />
      <LimitedEdition />
      <ArtisanStory />
      <GroveImage />
      <BottleCounters />
      <BlogSection />
      <SustainablePackaging />
      <CriticReviews />
      <ShopFooter />
    </div>
  );
};

export default Index;
