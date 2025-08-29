import { Button } from "@/components/ui/button";
import AnimatedAgentText from "./AnimatedAgentText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 overflow-hidden">
      {/* Neon gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bright-magenta/20 via-vivid-violet/15 to-electric-blue/20 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--neon-pink)_/_0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="text-foreground drop-shadow-[0_0_20px_hsl(var(--neon-pink))]">Trigent</span>
          </h1>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <AnimatedAgentText />
          </div>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          TrigentAI's three specialized agents eliminate the financial leaks, time drains, and growth barriers that keep your business stuck. Get measurable results in 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-neon-pink hover:bg-gradient-to-r hover:from-neon-pink hover:to-electric-blue text-white px-8 py-6 text-lg font-semibold rounded-xl min-w-[200px] shadow-[0_0_30px_hsl(var(--neon-pink)_/_0.5)] hover:shadow-[0_0_40px_hsl(var(--neon-pink)_/_0.7)] transition-all duration-300"
            asChild
          >
            <a href="https://cal.com/evanrios/ai-automation-strategy-call-trigentai" target="_blank" rel="noopener noreferrer">
              Book a Demo with an Expert
            </a>
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