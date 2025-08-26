import { Card, CardContent } from "@/components/ui/card";

const ResultsSection = () => {
  const results = [
    {
      company: "TrigentAI found $100K in hidden costs we didn't even know existed. The BI agent paid for itself in the first month.",
      metric: "$180K Recovered",
      detail: "ROI: 1,200% in Year 1",
      color: "text-trigent-cyan"
    },
    {
      company: "Our team got 30 hours per week back. No more manual reports, no more follow-up chaos. Pure efficiency.",
      metric: "30 Hours/Week Saved",
      detail: "300% Faster Execution",
      color: "text-trigent-orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how TrigentAI has transformed operations, saved costs, and accelerated growth for companies like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="bg-trigent-card border-trigent-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-1 bg-trigent-blue mb-4"></div>
                  <p className="text-muted-foreground italic text-lg leading-relaxed">
                    "{result.company}"
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-3xl font-bold ${result.color}`}>
                    {result.metric}
                  </h3>
                  <p className="text-muted-foreground font-medium">{result.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;