"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isAboutModalVisible, setIsAboutModalVisible] = useState(false);
  const [isServicesModalVisible, setIsServicesModalVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    router.push("/home/contact");
    setIsSidebarOpen(false);
  };

  const handleServicesClick = () => {
    setIsServicesModalVisible(true);
    setIsAboutModalVisible(false);
    setIsSidebarOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutModalVisible(true);
    setIsServicesModalVisible(false);
    setIsSidebarOpen(false);
  };

  const handleNameClick = () => {
    router.push("/");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={handleNameClick}
            >
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-vividMagenta to-electricBlue transition-all duration-300 hover:scale-105">
                Lulu
              </p>
            </div>

            {/* Desktop Menu (hidden on mobile) */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={handleAboutClick}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  About
                </button>
                <button
                  onClick={handleServicesClick}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  Services
                </button>
                <button
                  onClick={handleContactClick}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[60] transform transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-black to-gray-900 border-l border-white/10 shadow-2xl">
          <div className="flex flex-col h-full p-6">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center space-y-8">
              <button
                onClick={handleAboutClick}
                className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300 py-3 text-left"
              >
                About
              </button>
              <button
                onClick={handleServicesClick}
                className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300 py-3 text-left"
              >
                Services
              </button>
              <button
                onClick={handleContactClick}
                className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300 py-3 text-left"
              >
                Contact
              </button>
            </nav>

            {/* Social Links (optional) */}
            <div className="flex justify-center space-x-6 pb-8">
              <a href="#" className="text-white hover:text-vividMagenta transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter icon SVG */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-vividMagenta transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram icon SVG */}
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {isAboutModalVisible && (
        <Modal
          className="max-w-4xl z-[70] bg-gradient-to-br from-black to-gray-900 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-vividMagenta/20"
          content={
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <Image
                  src="/lulu1.png"
                  alt="Lulu"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-vividMagenta to-electricBlue bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Hey, I'm Lewis — a graphic designer and digital illustrator
                    who's been creating since I could first hold a pencil.
                  </p>
                  <p>
                    I started with doodles in the margins of school books,
                    sketching whatever caught my eye. Over time, those sketches
                    turned into stories, characters, and visuals — and
                    eventually, I found my way into the world of digital art.
                  </p>
                  <p>
                    These days, I bring ideas to life on my iPad using Procreate
                    and Adobe Illustrator, blending traditional roots with
                    modern tools.
                  </p>
                  <p>
                    What makes my style different? It's flexible. I believe good
                    design should speak to its purpose — so I adapt to what each
                    project needs.
                  </p>
                </div>
              </div>
            </div>
          }
          onClose={() => setIsAboutModalVisible(false)}
        />
      )}

      {/* Services Modal */}
      {isServicesModalVisible && (
        <Modal
          className="max-w-md z-[70] bg-gradient-to-br from-black to-gray-900 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-vividMagenta/20"
          content={
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-vividMagenta to-electricBlue bg-clip-text text-transparent">
                My Services
              </h3>
              <p className="mb-6 text-white/80">
                Interested in commissioning work or collaborating?
              </p>
              <button
                onClick={handleContactClick}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-vividMagenta to-electricBlue hover:opacity-90 transition-opacity duration-300"
              >
                Contact Me
              </button>
            </div>
          }
          onClose={() => setIsServicesModalVisible(false)}
        />
      )}
    </>
  );
};

export default Navbar;