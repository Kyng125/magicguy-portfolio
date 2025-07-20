"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-8 mx-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-2 items-center text-center">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-vividMagenta via-vividMagenta to-electricBlue">
              Lulu the Artist
            </h3>
            <p className="mb-4">
              Graphic designer and digital illustrator bringing ideas to life
              through Procreate and Adobe Illustrator.
            </p>
            <div className="flex space-x-4 justify-center">
              <Link href="https://x.com/luluDrawsStuff" target="_blank">
                <Image
                  src="/x-logo.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/instagram-logo.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="https://t.me" target="_blank">
                <Image
                  src="/telegram-logo.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-vividMagenta via-vividMagenta to-electricBlue">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-vividMagenta via-vividMagenta to-electricBlue">
              Get In Touch
            </h4>
            <ul className="flex flex-col items-center gap-2">
              <li className="flex items-center">
                <Image
                  src="/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <a
                  href="mailto:hello@lewisart.com"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  lulu@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <a
                  href="https://wa.me/2348106967452"
                  target="_blank"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
                >
                  +2348106967452
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter (optional) */}
        <div className="mb-12 p-6 bg-gray-900 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-vividMagenta via-vividMagenta to-electricBlue">
            Let&apos;s Connect
          </h4>
          <p className="text-center mb-4">
            Just checking my work out? Drop your email so I can say hi.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l-lg text-black"
            />
            <button className="bg-electricBlue hover:bg-vividMagenta px-6 py-2 rounded-r-lg font-bold transition-colors duration-300">
              Send
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Lulu Draws Stuff. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-vividMagenta hover:to-electricBlue transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
