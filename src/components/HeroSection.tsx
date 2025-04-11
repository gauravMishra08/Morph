import React from "react";
import heroImage from "../assets/hero.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white w-full">
      {/* Notification Banner */}
      <div className="w-[280px] sm:w-[300px] md:w-[315px] h-[40px] sm:h-[45px] md:h-[50px] border backdrop-blur-[20.1px] text-sm sm:text-base md:text-base font-semibold bg-[rgba(255,255,255,0.01)] mx-auto my-[24px] sm:my-[32px] md:my-[39px] rounded-[5px] border-solid border-[rgba(255,255,255,0.27)] flex items-center justify-center shadow-md transition-opacity duration-700 opacity-0 animate-fade-in">
        Anonymize Data with One Click! →
      </div>

      {/* Hero Content */}
      <div className="text-center px-4 sm:px-8 md:px-[70px] py-0">
        {/* Hero Image */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-0">
          <img
            src={heroImage}
            className="h-[80px] sm:h-[100px] md:h-24 max-sm:h-auto w-auto object-contain"
            alt="Protect Your Data with Morph"
          />
        </div>

        {/* Hero Description */}
        <div className="text-[#505155] text-lg sm:text-xl md:text-2xl font-semibold max-w-[90%] sm:max-w-[900px] md:max-w-[1042px] mx-auto my-6 sm:my-8 md:my-[39px] text-center">
          Morph is an AI-powered redaction tool that automatically hides sensitive information{" "}
          <span className="hidden md:inline"><br /></span>
          in text and images, ensuring privacy and compliance.
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
        <button className="w-[180px] sm:w-[200px] md:w-[230px] h-[40px] sm:h-[45px] md:h-[50px] text-sm sm:text-base md:text-base text-white rounded-md font-semibold bg-gradient-to-r from-[#FF4A36] via-[#E094F3] to-[#FF4A36] bg-[length:200%_200%] animate-gradient transition-transform hover:scale-105 shadow-lg">
          Try Morph Now
        </button>
      </div>
    </section>
  );
};