import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="max-w-none min-h-screen w-full bg-[#101217] mx-auto max-md:max-w-[991px] max-md:p-5 max-sm:max-w-screen-sm">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <FeatureSection />
        <ImageFeatureSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
