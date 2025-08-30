import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const demoPoints = [
    "Where money is being lost—and the fastest ways to stop it",
    "Which tasks to automate first to free up time",
    "How to strengthen brand and customer journeys for reliable growth",
    "A simple, step-by-step plan matched to your goals and timeline"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          What You'll See on the Demo
        </h2>

        <div className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
          {demoPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <span className="text-trigent-cyan mr-3 mt-1">•</span>
              <p className="text-lg text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg" 
          className="bg-trigent-purple hover:bg-trigent-purple/90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
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

export default DemoSection;