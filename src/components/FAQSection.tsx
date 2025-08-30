import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What businesses do you help?",
      answer: "Small and medium businesses that want clear savings, time back, and confident growth—without complexity."
    },
    {
      question: "How fast can we see results?",
      answer: "We focus on quick wins first, then build on that momentum with a practical plan."
    },
    {
      question: "Do we need to change how our team works?",
      answer: "No. We adapt to your rhythm so improvements stick."
    },
    {
      question: "Will we understand the reports?",
      answer: "Yes. Insights are written in plain business language, with clear next steps."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          FAQ
        </h2>

        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-trigent-card border-trigent-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-trigent-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
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
      </div>
    </section>
  );
};

export default FAQSection;