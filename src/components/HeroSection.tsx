import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 overflow-hidden">
      {/* Neon gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bright-magenta/20 via-vivid-violet/15 to-electric-blue/20 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--neon-pink)_/_0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground drop-shadow-[0_0_20px_hsl(var(--neon-pink))]">Trigent </span>
          <span className="text-neon-pink drop-shadow-[0_0_30px_hsl(var(--neon-pink))]">AI — Automation & Efficiency Agent</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          TrigentAI's three specialized agents eliminate the financial leaks, time drains, and growth barriers that keep your business stuck. Get measurable results in 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-neon-pink hover:bg-gradient-to-r hover:from-neon-pink hover:to-electric-blue text-white px-8 py-6 text-lg font-semibold rounded-xl min-w-[200px] shadow-[0_0_30px_hsl(var(--neon-pink)_/_0.5)] hover:shadow-[0_0_40px_hsl(var(--neon-pink)_/_0.7)] transition-all duration-300"
          >
            Book a Demo with an Expert
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-6 text-lg font-semibold rounded-xl min-w-[180px] bg-transparent hover:shadow-[0_0_30px_hsl(var(--electric-blue)_/_0.5)] transition-all duration-300"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;