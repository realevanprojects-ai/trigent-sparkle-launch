const AnimatedAgentText = () => {
  const agents = [
    "BI — A Business Intelligence Agent",
    "GX — Growth Acceleration Agent", 
    "AI — Automation & Efficiency Agent"
  ];

  return (
    <span className="text-neon-pink drop-shadow-[0_0_30px_hsl(var(--neon-pink))] flex flex-wrap items-center gap-2 md:gap-4">
      {agents.map((agent, index) => (
        <span key={index} className="whitespace-nowrap">
          {agent}
          {index < agents.length - 1 && (
            <span className="mx-2 md:mx-4 text-muted-foreground">•</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default AnimatedAgentText;