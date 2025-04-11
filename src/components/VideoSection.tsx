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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};