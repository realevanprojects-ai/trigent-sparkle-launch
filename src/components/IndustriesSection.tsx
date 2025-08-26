const IndustriesSection = () => {
  const industries = [
    ["Healthcare", "SaaS & Technology", "E-commerce", "Real Estate", "Manufacturing"],
    ["Professional Services", "Financial Services", "Logistics & Supply Chain", "Retail & CPG", "Construction"],
    ["Education & Training", "Hospitality & Tourism", "Marketing Agencies", "Legal Services", "Food & Beverage"]
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Industries We Serve
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          Our AI agents work across every major industry, delivering measurable results regardless of your business model.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.flat().map((industry, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-foreground hover:text-trigent-purple transition-colors duration-200">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;