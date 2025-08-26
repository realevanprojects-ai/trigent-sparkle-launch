import { useState, useEffect } from 'react';

const AnimatedAgentText = () => {
  const agents = [
    "BI — A Business Intelligence Agent",
    "GX — Growth Acceleration Agent", 
    "AI — Automation & Efficiency Agent"
  ];

  return (
    <div className="flex flex-col md:flex-row md:gap-2 items-center justify-center">
      {agents.map((agent, index) => (
        <span 
          key={agent}
          className={`text-neon-pink drop-shadow-[0_0_30px_hsl(var(--neon-pink))] 
                     animate-fade-in transition-all duration-700 ease-out
                     hover:scale-105 hover:drop-shadow-[0_0_40px_hsl(var(--neon-pink))]`}
          style={{
            animationDelay: `${index * 0.5}s`,
            animationFillMode: 'both'
          }}
        >
          {agent}
          {index < agents.length - 1 && <span className="hidden md:inline text-muted-foreground mx-2">•</span>}
        </span>
      ))}
    </div>
  );
};

export default AnimatedAgentText;