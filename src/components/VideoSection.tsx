"use client";
import React, { useRef } from "react";

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Video Section */}
      <section className="mt-8 sm:mt-12 md:mt-20">
        <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Gradient Border with Button-Style Effect */}
          <div className="relative p-[3px] sm:p-[4px] md:p-[5px] bg-gradient-to-r from-[#FF4A36] via-[#E094F3] to-[#FF4A36] bg-[length:200%_200%] animate-gradient rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="relative aspect-video w-full bg-[#101217] border border-white/20 rounded-[inherit] overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayToggle}
                  className="group w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-[#FF4A36] via-[#E094F3] to-[#FF4A36] bg-[length:200%_200%] animate-gradient transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  aria-label="Toggle video playback"
                >
                  <svg
                    className="w-1/3 h-1/3 transition-transform group-hover:scale-110"
                    viewBox="0 0 22.5 25.98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12.134C21.3333 12.9566 21.3333 14.8434 20 15.666L5 24.7224C3.66667 25.545 2 24.6016 2 22.9566L2 4.84338C2 3.19838 3.66667 2.25497 5 3.0776L20 12.134Z"
                      fill="#101217"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};