import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "A short discovery to pinpoint your biggest wins."
    },
    {
      number: "02", 
      title: "Diagnose",
      description: "A clear snapshot of savings, time returns, and growth gaps."
    },
    {
      number: "03",
      title: "Act",
      description: "Quick wins first, then a plan for steady, compounding improvements."
    },
    {
      number: "04",
      title: "Prove",
      description: "Plain-language reports that show what changed and why."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          How TrigentAI Works
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          A straightforward process that delivers measurable results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold mb-4" style={{ 
                color: 'hsl(var(--trigent-orange))', 
                textShadow: '0 0 20px hsl(var(--trigent-orange-glow) / 0.8), 0 0 40px hsl(var(--trigent-orange-glow) / 0.6)' 
              }}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <Button 
          size="lg" 
          className="bg-trigent-purple hover:bg-trigent-purple/90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
        >
          Book a Demo with an Expert
        </Button>
      </div>
    </section>
  );
};

export default HowItWorksSection;