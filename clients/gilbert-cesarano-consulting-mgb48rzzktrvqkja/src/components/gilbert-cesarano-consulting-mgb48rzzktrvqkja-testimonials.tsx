const testimonials = [
  {
    "name": "Maersk",
    "quote": "exceptional performance and highly knowledgeable and professional",
    "role": "Head of Data & BI"
  },
  {
    "name": "Siemens Smart Infrastructure",
    "quote": "Professional communication and collaboration. Teamplayer  & Leader with high integrity and accountability",
    "role": "Head of BI SI"
  },
  {
    "name": "Lufthansa Sky Group",
    "quote": "Very efficient, highly reliable and always on-time and on-budget",
    "role": "IT Manager"
  }
];

export function GilbertCesaranoConsultingMgb48rzzktrvqkjaTestimonials() {
  return (
    <section className="gilbert-cesarano-consulting-mgb48rzzktrvqkja-testimonials py-24 bg-white dark:bg-gray-900" data-testid="testimonials-gilbert-cesarano-consulting-mgb48rzzktrvqkja">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
              data-testid={`testimonial-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}
            >
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              {testimonial.role && testimonial.company && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
