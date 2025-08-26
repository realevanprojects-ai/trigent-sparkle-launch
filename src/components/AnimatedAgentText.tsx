import { useState, useEffect } from 'react';

const AnimatedAgentText = () => {
  const agents = [
    { text: "AI Automation & Efficiency Agent", color: "trigent-ai" },
    { text: "BI Business Intelligence Agent", color: "trigent-bi" }, 
    { text: "GX Growth Acceleration Agent", color: "trigent-gx" }
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

  const currentAgent = agents[currentIndex];
  
  return (
    <span 
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
      }`}
      style={{
        color: `hsl(var(--${currentAgent.color}))`,
        textShadow: `0 0 30px hsl(var(--${currentAgent.color}))`
      }}
    >
      {currentAgent.text}
    </span>
  );
};

export default AnimatedAgentText;