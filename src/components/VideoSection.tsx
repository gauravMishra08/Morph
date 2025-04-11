import React from "react";

export const VideoSection: React.FC = () => {
  return (
    <section className="mt-[82px]">
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg id="112:96" layer-name="video placeholder-1" width="1300" height="700" viewBox="0 0 1300 700" fill="none" xmlns="http://www.w3.org/2000/svg" class="video-placeholder-1" style="width: 1300px; height: 700px; margin: 82px auto; display: block"> <rect x="0.5" y="0.5" width="1299" height="699" rx="24.5" fill="#101217" stroke="white"></rect> <mask id="mask0_112_96" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="611" y="311" width="77" height="77"> <path d="M649.5 387C670.211 387 687 370.211 687 349.5C687 328.789 670.211 312 649.5 312C628.789 312 612 328.789 612 349.5C612 370.211 628.789 387 649.5 387Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"></path> <path d="M642 349.5V336.51L653.25 343.005L664.5 349.5L653.25 355.995L642 362.49V349.5Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"></path> </mask> <g mask="url(#mask0_112_96)"> <path d="M604.5 304.5H694.5V394.5H604.5V304.5Z" fill="url(#paint0_linear_112_96)" fill-opacity="0.9"></path> </g> <defs> <linearGradient id="paint0_linear_112_96" x1="649.5" y1="304.5" x2="649.5" y2="394.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FD4E40"></stop> <stop offset="1" stop-color="#E191EC"></stop> </linearGradient> </defs> </svg>',
        }}
      />
    </section>
  );
};
