import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="w-[315px] h-[50px] border backdrop-blur-[20.1px] text-white text-base font-semibold bg-[rgba(255,255,255,0.01)] mx-auto my-[39px] rounded-[5px] border-solid border-[rgba(255,255,255,0.27)] flex items-center justify-center">
        Anonymize Data with One Click!→
      </div>
      <div className="text-center px-[70px] py-0 max-md:px-5 max-md:py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/084a1aaa399e232e8bac4cac4f5a19edcb338135"
          className="w-[749px] h-24 max-sm:w-full max-sm:h-auto"
          alt="Morph heading"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fde4fb61b1875045ff88e1b71f119609630284b"
          className="w-[223px] h-24 max-sm:w-full max-sm:h-auto"
          alt="Morph subheading"
        />
        <div className="text-[#505155] text-2xl font-semibold max-w-[1042px] mx-auto my-[39px] max-sm:text-lg">
          Morph is an AI-powered redaction tool that automatically hides
          sensitive information in text and images, ensuring privacy and
          compliance.
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="112:90" layer-name="gradient" width="1440" height="231" viewBox="0 0 1440 231" fill="none" xmlns="http://www.w3.org/2000/svg" class="gradient" style="position: absolute; left: 0; width: 231px; height: 1440px; transform: rotate(-90deg)"> <path d="M1440 115.5C1440 51.7111 1117.65 0 720 0C322.355 0 0 51.7111 0 115.5C0 179.289 322.355 231 720 231C1117.65 231 1440 179.289 1440 115.5Z" fill="url(#paint0_radial_112_90)" fill-opacity="0.4"></path> <defs> <radialGradient id="paint0_radial_112_90" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 115.5) rotate(-90) scale(115.5 720)"> <stop stop-color="#E38ADC" stop-opacity="0.9"></stop> <stop offset="1" stop-color="#E38ADC" stop-opacity="0"></stop> </radialGradient> </defs> </svg>',
          }}
        />
      </div>
      <div className="w-[230px] h-[50px] mx-auto my-[50px]">
        <button className="w-full h-full border backdrop-blur-[20.1px] text-white text-xl font-semibold rounded-[5px] border-solid border-[rgba(255,255,255,0.27)] hover:bg-[rgba(255,255,255,0.1)] transition-colors">
          Try Morph Now
        </button>
      </div>
    </section>
  );
};
