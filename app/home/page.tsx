"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import BlinkingArrow from "../components/BlinkingArrow";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";

const Home = () => {
  const [isPortfolioModalVisible, setIsPortfolioModalVisible] = useState(false);
  const [isServicesModalVisible, setIsServicesModalVisible] = useState(false);
  const router = useRouter();

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/image (1).jpg",
    "/image (2).jpg",
    "/image (3).jpg",
    "/image (4).jpg",
    "/image (5).jpg",
    "/image (6).jpg"
  ];

  const [fontSizePx, setFontSizePx] = useState(48);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Map pixel sizes to Tailwind classes
  const pxToTailwind = (px: number) => {
    if (px >= 48) return "text-5xl";
    if (px >= 36) return "text-4xl";
    if (px >= 30) return "text-3xl";
    if (px >= 24) return "text-2xl";
    if (px >= 20) return "text-xl";
    if (px >= 18) return "text-lg";
    if (px >= 16) return "text-base";
    return "text-sm";
  };

  const fullText = `I started with doodles in the margins of school books, sketching whatever caught my eye. Over time, those sketches turned into stories, characters, and visuals — and eventually, I found my way into the world of digital art. These days, I bring ideas to life on my iPad using Procreate and Adobe Illustrator, blending traditional roots with modern tools.`;

  // Intersection Observer for section visibility
  useEffect(() => {
    const currentRef = section2Ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isSectionVisible) {
          setIsSectionVisible(true);
          setTypedText("");
          setCurrentIndex(0);
          setCurrentImageIndex(0);
          // setFontSizePx(48); // Reset font size
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isSectionVisible]);

  // Typing effect with font scaling
  useEffect(() => {
    if (!isSectionVisible || currentIndex >= fullText.length) return;

    const typingTimeout = setTimeout(() => {
      setTypedText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);

      if (textContainerRef.current) {
        const container = textContainerRef.current;
        const isOverflowing = container.scrollHeight > container.clientHeight;

        if (isOverflowing && fontSizePx > 14) {
          setFontSizePx((prev) => prev - 0.5); // Smoother scaling
        }
      }
    }, 30); // Faster typing speed

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, isSectionVisible, fullText, fontSizePx]);

  // Slideshow effect
  useEffect(() => {
    if (!isSectionVisible) return;

    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Faster slideshow

    return () => clearInterval(slideshowInterval);
  }, [isSectionVisible, images.length]);

  const handleContactClick = () => {
    router.push("/home/contact");
  };

  const handleServicesClick = () => {
    setIsServicesModalVisible(true);
    setIsPortfolioModalVisible(false);
  };

  const handlePortfolioClick = () => {
    setIsPortfolioModalVisible(true);
    setIsServicesModalVisible(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-vividMagenta/30 to-electricBlue/30"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)"
            }}
          />
        ))}
      </div>

      <Navbar />

      <BlinkingArrow />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="mb-8 text-sm md:text-base text-gray-400 tracking-widest">
            ARTIST • COMMISSIONS OPEN • CREATIVE EXPLORER
          </h2>
          <div className="relative group w-full max-w-3xl">
            <Image
              src="/image5.jpg"
              alt="Featured Artwork"
              width={800}
              height={400}
              priority
              className="w-full h-auto rounded-xl shadow-2xl shadow-vividMagenta/20 transform transition-all duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl pointer-events-none" />
          </div>
          <h2 className="mt-8 text-sm md:text-base text-gray-400 tracking-widest">
            DIGITAL ILLUSTRATOR • CHARACTER DESIGNER • VISUAL STORYTELLER
          </h2>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none tracking-tight px-4 mb-24 text-center">
          <span className="bg-gradient-to-r from-vividMagenta to-electricBlue bg-clip-text text-transparent">
            Hey, I&apos;m Lewis
          </span>
          <br />
          Graphic designer & digital illustrator creating magic since childhood.
        </h1>

        {/* Gallery Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square relative group overflow-hidden rounded-lg shadow-lg hover:shadow-vividMagenta/30 transition-all duration-300"
            >
              <Image
                src={`/image${(i % 4) + 1}.jpg`}
                alt={`Artwork ${i + 1}`}
                fill
                className="object-cover transform transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-24">
          <ContactButton />
        </div>
      </section>

      {/* About Section */}
      <div
        id="section2"
        className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-24 mb-20 px-4 md:px-8"
        ref={section2Ref}
      >
        {/* Text container with dynamic scaling */}
        <div
          ref={textContainerRef}
          className="w-full lg:w-1/2 h-[300px] lg:h-[400px] flex items-center p-6 bg-black/10 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500"
          style={{ minHeight: "300px" }}
        >
          <p
            className={`font-bold leading-relaxed tracking-wide ${
              fontSizePx > 36
                ? "lg:text-4xl"
                : fontSizePx > 24
                ? "lg:text-2xl"
                : "lg:text-xl"
            } text-white/90 text-scale-transition`}
          >
            {typedText}
            <span className="ml-1 animate-pulse bg-gradient-to-r from-vividMagenta to-electricBlue h-6 w-1 inline-block align-middle"></span>
          </p>
        </div>

        {/* Image slideshow container */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-electricBlue/20">
            <Image
              src={images[currentImageIndex]}
              alt={`Artwork ${currentImageIndex + 1}`}
              width={600}
              height={400}
              key={currentImageIndex}
              className="w-full h-auto object-cover animate-fadeIn transform transition-all duration-700 group-hover:scale-105"
            />

            {/* Slideshow navigation indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "w-8 bg-gradient-to-r from-vividMagenta to-electricBlue"
                      : "w-2 bg-white/30"
                  }`}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative frame elements */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>
          </div>

          {/* Caption text */}
          <p className="mt-4 text-center text-white/70 text-sm italic">
            {`Artwork ${currentImageIndex + 1} of ${images.length}`}
          </p>
        </div>
      </div>

      {/* Action Cards */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Portfolio Card */}
          <div className="relative group w-full md:w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-vividMagenta to-electricBlue rounded-2xl opacity-80 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative h-full p-0.5 rounded-2xl">
              <div className="h-full bg-black rounded-[calc(0.75rem-1px)] p-6 flex flex-col">
                <h3 className="text-3xl font-bold mb-4">Portfolio</h3>
                <p className="text-white/70 mb-6">
                  Explore my collection of digital illustrations and graphic
                  design work.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={handlePortfolioClick}
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-vividMagenta/80 to-electricBlue/80 hover:from-vividMagenta hover:to-electricBlue transition-all duration-300 flex items-center justify-between group"
                  >
                    <span>View Gallery</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative group w-full md:w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-electricBlue to-vividMagenta rounded-2xl opacity-80 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative h-full p-0.5 rounded-2xl">
              <div className="h-full bg-black rounded-[calc(0.75rem-1px)] p-6 flex flex-col">
                <h3 className="text-3xl font-bold mb-4">Contact</h3>
                <p className="text-white/70 mb-6">
                  Ready to collaborate? Let&apos;s bring your ideas to life.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={handleContactClick}
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-electricBlue/80 to-vividMagenta/80 hover:from-electricBlue hover:to-vividMagenta transition-all duration-300 flex items-center justify-between group"
                  >
                    <span>Get in Touch</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      {isPortfolioModalVisible && (
        <Modal
          onClose={() => setIsPortfolioModalVisible(false)}
          className="bg-gradient-to-br from-black to-gray-900 border border-white/10 rounded-2xl p-8 max-w-md"
          content={
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-vividMagenta to-electricBlue bg-clip-text text-transparent">
                My Creative Portfolio
              </h3>
              <p className="mb-8 text-white/80">
                Explore my work on these platforms:
              </p>
              <div className="space-y-4">
                <Link
                  href="https://x.com/LuluDrawsSuff"
                  target="_blank"
                  className="block w-full py-3 px-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                >
                  Twitter Portfolio
                </Link>
                <Link
                  href="https://behance.com"
                  target="_blank"
                  className="block w-full py-3 px-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                >
                  Behance Portfolio
                </Link>
              </div>
            </div>
          }
        />
      )}

      {isServicesModalVisible && (
        <Modal
          onClose={() => setIsServicesModalVisible(false)}
          className="bg-gradient-to-br from-black to-gray-900 border border-white/10 rounded-2xl p-8 max-w-md"
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
        />
      )}
    </div>
  );
};

export default Home;
