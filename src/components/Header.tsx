import React from "react";
import logo from "../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-start bg-[#101217] px-4 sm:px-8 md:px-16 py-0 h-[72px] w-full">
      <nav>
        <img
          src={logo}
          alt="Logo"
          className="w-[70px] sm:w-[90px] md:w-[114px] h-auto object-contain"
        />
      </nav>
    </header>
  );
};