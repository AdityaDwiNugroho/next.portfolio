import React, { useState, useEffect } from "react";
import mascot from "../assets/img/mascot1.png";

const EnhancedMascot = () => {
  const [isHovering, setIsHovering] = useState(false);
  const fullText = "I'm a ...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovering) {
      let charIndex = 0;
      setDisplayedText("");
      interval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayedText((prev) => prev + fullText[charIndex]);
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    } else {
      setDisplayedText("");
    }

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="relative w-full h-[1024px]">
      <div
        className="mascot-container absolute inset-0 bg-no-repeat bg-center rounded-lg cursor-pointer"
        style={{
          backgroundImage: `url(${mascot.src})`,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`mascot-glow absolute inset-0 ${
            isHovering ? "active" : ""
          }`}
        ></div>
      </div>
      {isHovering && (
        <div className="speech-bubble-container absolute top-[5%] right-[-20%] animate-fade-in">
          <svg
            className="speech-bubble"
            viewBox="0 0 300 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M290,50 Q290,10 250,10 H50 Q10,10 10,50 V100 Q10,140 50,140 H250 L270,140 L290,170 V100 Q290,50 290,50 Z" />
          </svg>
          <div className="speech-text">
            <p>{displayedText}</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .mascot-container {
          mask-image: url(${mascot.src});
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        .mascot-glow {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .mascot-glow.active {
          opacity: 1;
        }
        .speech-bubble-container {
          position: relative;
          width: 300px;
          transform: translateX(-50%) translateY(20%);
        }
        .speech-bubble {
          width: 100%;
          height: auto;
        }
        .speech-bubble path {
          fill: white;
          stroke: black;
          stroke-width: 5;
        }
        .speech-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 80%;
        }
        .speech-text p {
          margin: 0;
          font-size: 18px;
          font-weight: bold;
          font-family: "Comic Sans MS", cursive, sans-serif;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default EnhancedMascot;
