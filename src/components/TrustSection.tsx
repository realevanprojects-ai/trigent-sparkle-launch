const TrustSection = () => {
  const trustFactors = [
    {
      title: "Plain Language",
      description: "No technical speak—just what's happening and what to do next."
    },
    {
      title: "Measurable Outcomes",
      description: "Savings, hours back, conversion lifts—tracked and reported."
    },
    {
      title: "Transparency",
      description: "Every recommendation includes the reasoning behind it."
    },
    {
      title: "Respect for Your Business",
      description: "We fit how you already work; no disruption, no busywork."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Why Owners and Managers Trust TrigentAI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">{factor.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;