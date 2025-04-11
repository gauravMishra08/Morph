import React from "react";

export const FeatureSection: React.FC = () => {
  return (
    <section className="mt-[190px] px-[70px] py-0 max-md:px-5 max-md:py-0">
      <div className="text-[#FF4B39] text-base font-semibold mb-2.5">
        # Hide Sensitive Data in Documents
      </div>
      <h2 className="text-white text-5xl font-semibold mb-2.5 max-sm:text-[32px]">
        Keep sensitive info under wraps, effortlessly!
      </h2>
      <div className="text-[#505155] text-4xl font-semibold max-sm:text-xl">
        Upload your document, and we'll automatically hide sensitive information
        while keeping the rest intact.
      </div>
      <div className="mt-[63px]">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="112:112" layer-name="video placeholder-2" width="1200" height="500" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="video-placeholder-2" style="width: 1200px; height: 500px; margin: 63px auto; display: block"> <rect x="0.5" y="0.5" width="1199" height="499" rx="9.5" fill="#101217" stroke="white"></rect> <mask id="mask0_112_112" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="574" y="224" width="52" height="52"> <path d="M600 275C613.807 275 625 263.807 625 250C625 236.193 613.807 225 600 225C586.193 225 575 236.193 575 250C575 263.807 586.193 275 600 275Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"></path> <path d="M595 250V241.34L602.5 245.67L610 250L602.5 254.33L595 258.66V250Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"></path> </mask> <g mask="url(#mask0_112_112)"> <path d="M570 220H630V280H570V220Z" fill="#505155"></path> </g> </svg>',
          }}
        />
      </div>
    </section>
  );
};
