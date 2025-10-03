import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    "question": "How can I get started with Gilbert Cesarano?",
    "answer": "Book a call for a short introduction or fill out the application form. This will help identify your needs and the feasibility of your request."
  },
  {
    "question": "What is he specialized into?",
    "answer": "Mainly Qlik Sense, Qlik Cloud, QlikView with SAP for Finance, Procurement and Global Trade Management but also very knowledgeable in other products, IT cloud architectures due to constant learning habits and professional track records."
  },
  {
    "question": "What is his background?",
    "answer": "Born in Germany, raised in Italy, continued school and university in Mainz Germany studying Bachelor of Science in Mathematics & Economics with a big focus on IT & Business Intelligence and since 2018 living in Switzerland. Gilbert Cesarano is a relentless explorer and constant learner always looking for Win-Win opportunities."
  }
];

export function GilbertCesaranoConsultingMgb48rzzktrvqkjaFAQ() {
  return (
    <section className="gilbert-cesarano-consulting-mgb48rzzktrvqkja-faq py-24 bg-gray-50 dark:bg-gray-800" data-testid="faq-gilbert-cesarano-consulting-mgb48rzzktrvqkja">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger data-testid={`faq-question-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent data-testid={`faq-answer-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}>
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
