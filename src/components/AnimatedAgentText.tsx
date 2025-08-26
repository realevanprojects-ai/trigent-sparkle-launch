import { useState, useEffect } from 'react';

const AnimatedAgentText = () => {
  const agents = [
    "AI Automation & Efficiency Agent",
    "BI A Business Intelligence Agent", 
    "GX Growth Acceleration Agent"
  ];

  const agentColors = [
    'hsl(var(--trigent-ai))',    // AI - #fd674d
    'hsl(var(--trigent-bi))',    // BI - #390bf2
    'hsl(var(--trigent-gx))'     // GX - #7d0da0
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
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
      }`}
      style={{
        color: agentColors[currentIndex],
        textShadow: `0 0 30px ${agentColors[currentIndex]}`
      }}
    >
      {agents[currentIndex]}
    </span>
  );
};

export default AnimatedAgentText;