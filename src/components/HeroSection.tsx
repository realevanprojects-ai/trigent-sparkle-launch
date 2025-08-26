import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Three Specialized AI Agents That Solve Real Problems
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Stop treating symptoms. Each TrigentAI agent attacks the root cause of what's actually costing you money, time, and growth.
        </p>
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

export default HeroSection;