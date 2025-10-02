import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    "question": "How long does it take to set up?",
    "answer": "Most customers are up and running within 15 minutes. Our intuitive interface guides you through the setup process, and our templates help you get started instantly."
  },
  {
    "question": "Do I need technical knowledge?",
    "answer": "Not at all! Our platform is designed for everyone. The visual workflow builder requires zero coding. However, developers can use our API for advanced customizations."
  },
  {
    "question": "Can I cancel anytime?",
    "answer": "Yes, absolutely. There are no long-term contracts or commitments. You can cancel your subscription at any time with just one click."
  },
  {
    "question": "What integrations do you support?",
    "answer": "We integrate with 50+ popular tools including Slack, Google Workspace, Salesforce, HubSpot, Stripe, and many more. We add new integrations every month based on customer requests."
  },
  {
    "question": "Is my data secure?",
    "answer": "Security is our top priority. We use bank-level AES-256 encryption, are SOC 2 Type II certified, and fully compliant with GDPR and HIPAA. Your data is encrypted both in transit and at rest."
  },
  {
    "question": "Do you offer a free trial?",
    "answer": "Yes! All plans come with a free trial period - no credit card required. You can explore all features and cancel anytime during the trial if it's not the right fit."
  }
];

export function TechflowSolutionsMg9qefx21lsyciblFAQ() {
  return (
    <section className="techflow-solutions-mg9qefx21lsycibl-faq py-24 bg-gray-50 dark:bg-gray-800" data-testid="faq-techflow-solutions-mg9qefx21lsycibl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger data-testid={`faq-question-${index}-techflow-solutions-mg9qefx21lsycibl`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent data-testid={`faq-answer-${index}-techflow-solutions-mg9qefx21lsycibl`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
