import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentsSection = () => {
  const agents = [
    {
      name: "Trigent BI",
      subtitle: "Business Intelligence Agent",
      color: "trigent-bi",
      buttonColor: "bg-trigent-bi hover:bg-trigent-bi/90",
      problem: "87% of SMBs lose $50K+ annually to operational waste like late fees, duplicate subscriptions, overdue invoices, inefficient processes, bleeding cash daily.",
      solution: "Scans your entire operation, identifies every money leak, and creates a prioritized action plan that stops financial hemorrhaging within 30 days.",
      benefits: [
        "Immediate visibility into all hidden costs and waste",
        "Automated detection of duplicate payments and subscriptions",
        "Cash flow optimization that adds 15-25% to your bottom line",
        "Monthly financial health reports with exact ROI tracking"
      ],
      outcome: "Average clients recover $75K in year one and prevent $200K+ in future losses."
    },
    {
      name: "Trigent AI",
      subtitle: "Automation & Efficiency Agent",
      color: "trigent-ai",
      buttonColor: "bg-trigent-ai hover:bg-trigent-ai/90",
      problem: "Your team wastes 60% of its time on repetitive tasks, manual follow-ups, and administrative overhead that adds zero value to your business growth.",
      solution: "Eliminates repetitive work through intelligent automation, streamlines workflows, and ensures your team focuses only on revenue-generating activities.",
      benefits: [
        "Complete automation of follow-ups, scheduling, and reporting",
        "Workflow optimization that cuts task completion time by 70%",
        "Intelligent prioritization so nothing important falls through cracks",
        "Real-time productivity dashboards showing time saved"
      ],
      outcome: "Teams report 25+ hours saved weekly and 300% faster project completion."
    },
    {
      name: "Trigent GX",
      subtitle: "Growth Acceleration Agent",
      color: "trigent-gx",
      buttonColor: "bg-trigent-gx hover:bg-trigent-gx/90",
      problem: "Your marketing generates leads that don't convert because your message is unclear, your customer journey is broken, and prospects can't understand your value.",
      solution: "Creates crystal-clear positioning, optimizes every customer touchpoint, and builds conversion systems that turn more prospects into profitable, long-term clients.",
      benefits: [
        "Messaging that immediately communicates your unique value",
        "Customer journeys that eliminate confusion and drive action",
        "Conversion optimization that doubles your close rate",
        "Brand positioning that commands premium pricing"
      ],
      outcome: "Clients see 150% improvement in conversion rates and 40% increase in average deal size."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="bg-trigent-card border-trigent-border hover:border-trigent-purple/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold mb-2">
                  <span className={`text-${agent.color}`}>{agent.name}</span>
                  <span className="text-foreground"> — {agent.subtitle}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">The problem:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{agent.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What it does:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{agent.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">You get:</h4>
                  <ul className="space-y-1">
                    {agent.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-trigent-cyan mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Outcome:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{agent.outcome}</p>
                </div>

                <Button 
                  className={`w-full ${agent.buttonColor} text-white font-semibold py-6 rounded-xl`}
                  asChild
                >
                  <a href="https://cal.com/trigentai/ai-automation-strategy-call-trigentai" target="_blank" rel="noopener noreferrer">
                    Get {agent.name} Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;