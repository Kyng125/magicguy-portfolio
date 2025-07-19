import React from "react";

const BlinkingArrow = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div
      className="fixed top-28 right-9 flex flex-col items-center animate-bounce z-20 cursor-pointer"
      onClick={handleScrollToBottom}
    >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-electricBlue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default BlinkingArrow;
