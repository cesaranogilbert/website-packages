import { Button } from '@/components/ui/button';

export function TechflowSolutionsMg9qefx21lsyciblCTA() {
  return (
    <section 
      className="techflow-solutions-mg9qefx21lsycibl-cta py-24 bg-primary text-white"
      data-testid="cta-techflow-solutions-mg9qefx21lsycibl"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of companies already saving time and money with TechFlow. Start your free trial today - no credit card required.
        </p>
        
        <Button 
          size="lg"
          variant="secondary"
          asChild
          data-testid="button-cta-techflow-solutions-mg9qefx21lsycibl"
        >
          <a href="/signup">Get Started Free</a>
        </Button>
      </div>
    </section>
  );
}
