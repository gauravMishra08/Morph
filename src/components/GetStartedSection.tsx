import React from "react";

export const GetStartedSection: React.FC = () => {
  return (
    <section className="text-center mt-[100px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="112:126" width="760" height="96" viewBox="0 0 760 96" fill="none" xmlns="http://www.w3.org/2000/svg" class="get-started-heading" style="width: 760px; height: 96px; margin: 0 auto"> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="64" font-weight="800" letter-spacing="0em"><tspan x="542.536" y="70.4">Morph</tspan></text> <path d="M537.243 53.7393L602.654 53.7393" stroke="#101217" stroke-width="11.1376"></path> <path d="M537 31.8813L557.851 31.8813" stroke="#101217" stroke-width="4.17659"></path> <line x1="560.835" y1="24.0931" x2="579.212" y2="70.5924" stroke="#101217" stroke-width="2.22751"></line> <line x1="545.598" y1="65.1546" x2="553.394" y2="65.1546" stroke="#101217" stroke-width="5.56879"></line> <line x1="552.56" y1="31.8811" x2="556.736" y2="31.8811" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="540.308" y1="31.8811" x2="549.497" y2="31.8811" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="540.308" y1="50.5368" x2="602.957" y2="50.5368" stroke="#FF4B39" stroke-width="1.3922"></line> <path d="M551.728 53.8781L600.743 54" stroke="#FF4B39" stroke-width="1.3922"></path> <line x1="540.082" y1="53.8781" x2="549.827" y2="53.8781" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="541.421" y1="64.1804" x2="551.167" y2="64.1804" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="537.525" y1="66.4079" x2="547.27" y2="66.4079" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="548.105" y1="66.4079" x2="551.447" y2="66.4079" stroke="#FF4B39" stroke-width="1.3922"></line> <path d="M537.801 57.2192L603.743 57.2192" stroke="#FF4B39" stroke-width="1.3922"></path> <line x1="538.082" y1="31.8811" x2="539.474" y2="31.8811" stroke="#FF4B39" stroke-width="1.3922"></line> <line x1="550.331" y1="31.8811" x2="551.723" y2="31.8811" stroke="#FF4B39" stroke-width="1.3922"></line> <circle cx="595.438" cy="28.6793" r="1.3922" fill="#101217"></circle> <circle cx="553.952" cy="45.107" r="1.3922" fill="#101217"></circle> <line x1="542.536" y1="44.6896" x2="545.042" y2="44.6896" stroke="white" stroke-width="1.3922"></line> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="64" font-weight="bold" letter-spacing="0em"><tspan x="0" y="70.4">Get Started with </tspan></text> </svg>',
          }}
        />
      </div>
      <div className="text-[#505155] text-4xl font-semibold leading-normal mt-px max-sm:text-2xl">
        <span>Ready to protect your data? Upload your file</span>
        <br />
        <span>and let Morph handle the rest!</span>
      </div>
    </section>
  );
};
