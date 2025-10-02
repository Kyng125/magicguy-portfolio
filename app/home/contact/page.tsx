"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Footer from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleBackClick = () => {
    router.push("/home");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = "service_d7iw7e8";
      const templateId = "template_kw5e2wi";
      const userId = "-_mdA78XWYPlPgyTt";

      await emailjs.send(serviceId, templateId, formData, userId);

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={handleBackClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <div className="relative">
            <ArrowLeft
              className={`h-6 w-6 transition-all duration-300 ${
                isHovered ? "text-vividMagenta" : "text-white"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full bg-vividMagenta/20 scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isHovered ? "scale-100" : ""
              }`}
            ></div>
          </div>
          <span className="text-lg font-medium group-hover:text-vividMagenta transition-colors duration-300">
            Back to Home
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-vividMagenta to-electricBlue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration?
            Fill out the form below and I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-vividMagenta/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-white/80"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-vividMagenta focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white/80"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-vividMagenta focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-white/80"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-vividMagenta focus:border-transparent transition-all duration-300"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-vividMagenta to-electricBlue text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-vividMagenta/30 ${
                  isSending ? "opacity-80" : "hover:opacity-90"
                }`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {successMessage && (
              <div
                className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${
                  successMessage.includes("successfully")
                    ? "bg-green-900/30 text-green-400"
                    : "bg-red-900/30 text-red-400"
                }`}
              >
                {successMessage}
              </div>
            )}
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-6 text-white/80">
            Or reach out directly
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 hover:text-vividMagenta transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              hello@example.com
            </a>
            <a
              href="tel:+2348106967452"
              className="flex items-center gap-2 hover:text-electricBlue transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              +2348106967452
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
