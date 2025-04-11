import React from "react";

export const ImageFeatureSection: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="flex justify-center">
        {/* Mobile View (hidden on desktop) */}
        <div className="block sm:hidden px-4">
          <div className="text-center">
            <div className="mt-4 text-[#FF4B39] text-sm font-semibold mb-2">
              # Stealth Mode for Images
            </div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Blur Sensitive Information in Images
            </h2>
            <div className="text-[#505155] text-base font-semibold">
              Easily remove or blur confidential data from images while keeping
              everything else clear.
            </div>
          </div>
          <div className="relative z-10 mt-6">
            <div className="relative w-full max-w-[300px] h-[200px] mx-auto bg-[#101217] rounded-lg border border-white/20 overflow-hidden">
              <video
                src="/demo-video.mp4"
                controls
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Desktop View (hidden on mobile) */}
        <svg
          viewBox="0 0 1300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block w-full max-w-[1300px] h-auto px-4 sm:px-6 text-sensitive-data"
        >
          {/* Text: Blur Sensitive Information in Images */}
          <text
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Poppins, sans-serif"
            fontSize="48"
            fontWeight="600"
            letterSpacing="0em"
          >
            <tspan x="0" y="89.6">
              Blur Sensitive
            </tspan>
            <tspan x="0" y="161.6">
              Information in
            </tspan>
            <tspan x="0" y="233.6">
              Images
            </tspan>
          </text>

          {/* Text: Easily remove or blur... */}
          <text
            fill="#505155"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Poppins, sans-serif"
            fontSize="36"
            fontWeight="600"
            letterSpacing="0em"
          >
            <tspan x="0" y="287.6">
              Easily remove or blur
            </tspan>
            <tspan x="0" y="341.6">
              confidential data from
            </tspan>
            <tspan x="0" y="395.6">
              images while keeping
            </tspan>
            <tspan x="0" y="449.6">
              everything else clear.
            </tspan>
          </text>

          {/* Text: # Stealth Mode for Images */}
          <text
            fill="#FF4B39"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Poppins, sans-serif"
            fontSize="16"
            fontWeight="600"
            letterSpacing="0em"
          >
            <tspan x="0" y="17.6">
              # Stealth Mode for Images
            </tspan>
          </text>

          {/* Video */}
          <foreignObject x="500.5" y="0.5" width="799" height="599">
            <video
              src="/demo-video.mp4"
              controls
              className="w-full h-full rounded-lg border border-white"
              style={{ objectFit: "cover" }}
            />
          </foreignObject>
        </svg>
      </div>
    </section>
  );
};
