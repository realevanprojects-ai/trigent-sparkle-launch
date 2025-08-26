import { useState, useEffect } from 'react';

const AnimatedAgentText = () => {
  const agents = [
    "AI Automation & Efficiency Agent",
    "BI A Business Intelligence Agent", 
    "GX Growth Acceleration Agent"
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
      className={`text-neon-pink drop-shadow-[0_0_30px_hsl(var(--neon-pink))] transition-all duration-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
      }`}
    >
      {agents[currentIndex]}
    </span>
  );
};

export default AnimatedAgentText;