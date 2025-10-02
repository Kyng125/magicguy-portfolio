"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ContactButton = () => {
  const router = useRouter();

  const handleContactClick = () => {
    // Your contact click handler logic
    console.log("Contact button clicked");
    router.push("/home/contact"); // Uncomment if using Next.js router
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleContactClick();

    // Ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.className = "absolute bg-white/30 rounded-full animate-ripple";
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="mt-14 mb-7 text-center">
      <button
        onClick={handleButtonClick}
        className="relative group overflow-hidden px-12 py-6 rounded-box bg-gradient-to-br from-vividMagenta to-electricBlue shadow-2xl shadow-electricBlue/50 hover:shadow-vividMagenta/50 transition-all duration-500 ease-out"
      >
        <span className="relative z-10 text-white font-extrabold text-2xl uppercase tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber transition-all duration-300">
          Contact Me
        </span>

        {/* Animated background elements */}
        <span className="absolute inset-0 bg-gradient-to-br from-electricBlue to-vividMagenta opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>

        {/* Glow effect */}
        <span className="absolute -inset-2 bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>

        {/* Animated border */}
        <span className="absolute inset-0 rounded-box border-4 border-transparent group-hover:border-white/30 transition-all duration-700"></span>
      </button>
    </div>
  );
};

export default ContactButton;
