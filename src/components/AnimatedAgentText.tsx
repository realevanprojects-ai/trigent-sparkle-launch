import { useState, useEffect } from 'react';

const AnimatedAgentText = () => {
  const agents = [
    "BI — A Business Intelligence Agent",
    "GX — Growth Acceleration Agent", 
    "AI — Automation & Efficiency Agent"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % agents.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [agents.length]);

  return (
    <span 
      className={`text-neon-pink drop-shadow-[0_0_30px_hsl(var(--neon-pink))] transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-4 scale-95'
      }`}
    >
      {agents[currentIndex]}
    </span>
  );
};

export default AnimatedAgentText;