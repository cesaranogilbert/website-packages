const testimonials = [
  {
    "name": "Sarah Johnson",
    "role": "CEO",
    "company": "DataCorp Inc",
    "quote": "TechFlow has completely transformed how we operate. We've saved 20 hours per week on manual tasks and our team can focus on what really matters.",
    "rating": 5
  },
  {
    "name": "Michael Chen",
    "role": "Operations Manager",
    "company": "GrowthHub",
    "quote": "The ROI was immediate. Within the first month, we automated our entire onboarding process and reduced errors by 95%. Absolutely game-changing.",
    "rating": 5
  },
  {
    "name": "Emily Rodriguez",
    "role": "CTO",
    "company": "InnovateNow",
    "quote": "Best automation platform we've used. The AI capabilities are truly impressive and the support team is exceptional. Highly recommend!",
    "rating": 5
  }
];

export function TechflowSolutionsMg9qefx21lsyciblTestimonials() {
  return (
    <section className="techflow-solutions-mg9qefx21lsycibl-testimonials py-24 bg-white dark:bg-gray-900" data-testid="testimonials-techflow-solutions-mg9qefx21lsycibl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
              data-testid={`testimonial-${index}-techflow-solutions-mg9qefx21lsycibl`}
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
