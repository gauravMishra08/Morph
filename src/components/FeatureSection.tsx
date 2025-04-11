import React, { useState, useEffect } from "react";

export const FeatureSection: React.FC = () => {
  const fullText =
    "Morph is your ultimate data privacy companion, seamlessly anonymizing sensitive information with AI-powered precision. This intelligent redaction ensures that every piece of data remains protected while retaining its usability, maximizing security and compliance.";

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textColors, setTextColors] = useState<string[]>([]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
        // Transition from light gray (#A0A0A0) to white, emphasizing fade-in effect
        const progress = currentIndex / fullText.length;
        const red = Math.min(255, 160 + Math.floor(95 * progress)); // Start at 160, end at 255
        const green = Math.min(255, 160 + Math.floor(95 * progress));
        const blue = Math.min(255, 160 + Math.floor(95 * progress));
        setTextColors((prev) => [...prev, `rgb(${red}, ${green}, ${blue})`]);
      }, 50); // Typing speed (50ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Ensure textColors array matches displayedText length
  useEffect(() => {
    if (textColors.length < displayedText.length) {
      const progress = (textColors.length + 1) / fullText.length;
      const red = Math.min(255, 160 + Math.floor(95 * progress));
      const green = Math.min(255, 160 + Math.floor(95 * progress));
      const blue = Math.min(255, 160 + Math.floor(95 * progress));
      setTextColors((prev) => [...prev, `rgb(${red}, ${green}, ${blue})`]);
    }
  }, [displayedText, textColors.length, fullText.length]);

  return (
    <section className="relative w-full mt-8 sm:mt-12 md:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-16">
      {/* Text Section */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-center lg:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A36] via-[#E094F3] to-[#7B61FF]">
            Redaction = You & Morph
          </span>
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 text-white min-h-[120px] sm:min-h-[180px] md:min-h-[240px] lg:min-h-[300px] text-center lg:text-left typed-text">
          {displayedText.split("").map((char, index) => (
            <span
              key={index}
              style={{
                color: textColors[index] || "#A0A0A0", // Start with light gray
                transition: "color 0.5s ease", // Smoother transition
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8 text-[#FF4B39] text-sm sm:text-base md:text-lg font-semibold mb-2 text-center lg:text-left">
          # Hide Sensitive Data in Documents
        </div>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center lg:text-left">
          Keep sensitive info under wraps, effortlessly!
        </h2>
        <div className="text-[#505155] text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-center lg:text-left">
          Upload your document, and we'll automatically hide sensitive
          information while keeping the rest intact.
        </div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] mx-auto rounded-lg overflow-hidden">
          <video
            src="/demo-video.mp4"
            controls
            className="w-full h-full rounded-lg"
            style={{ objectFit: "cover" }}
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Removed Gradient Border */}
        </div>
      </div>
    </section>
  );
};
