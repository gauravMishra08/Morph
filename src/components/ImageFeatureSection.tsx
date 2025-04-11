import React from "react";

export const ImageFeatureSection: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="flex justify-center">
        <svg
          viewBox="0 0 1300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[1300px] h-auto px-4 sm:px-6 text-sensitive-data"
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

          {/* Video replacing the placeholder rectangle */}
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