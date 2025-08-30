import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
          Ready to Stop Losing Money and Start Growing Fast?
        </h2>
        
        <Button 
          size="lg" 
          className="bg-trigent-purple hover:bg-trigent-purple/90 text-white px-12 py-8 text-xl font-semibold rounded-xl"
          asChild
        >
          <a href="https://cal.com/trigentai/ai-automation-strategy-call-trigentai" target="_blank" rel="noopener noreferrer">
            Book a Demo with an Expert
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;