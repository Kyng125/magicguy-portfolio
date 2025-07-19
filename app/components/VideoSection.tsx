import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsPlaying(isInViewport);
      }
    };

    // Check on mount to start playing immediately if in viewport
    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="video-section video-container shadow-pink1 shadow-lg rounded-3xl z-10"
      ref={videoRef}
    >
      <ReactPlayer
        url="/Sanera_Intro.webm"
        playing={isPlaying}
        muted={true}
        loop={true}
        controls={true}
        width="70%"
        height="auto"
        className="rounded-lg shadow-lg"
      />
    </section>
  );
};

export default VideoSection;
