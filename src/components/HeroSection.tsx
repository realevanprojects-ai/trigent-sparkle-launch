import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground">Trigent </span>
          <span className="text-[hsl(174,100%,70%)]">AI — Automation & Efficiency Agent</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          TrigentAI's three specialized agents eliminate the financial leaks, time drains, and growth barriers that keep your business stuck. Get measurable results in 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[hsl(220,70%,50%)] to-[hsl(262,83%,58%)] hover:from-[hsl(220,70%,45%)] hover:to-[hsl(262,83%,53%)] text-white px-8 py-6 text-lg font-semibold rounded-xl min-w-[200px]"
          >
            Book a Demo with an Expert
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground px-8 py-6 text-lg font-semibold rounded-xl min-w-[180px]"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;