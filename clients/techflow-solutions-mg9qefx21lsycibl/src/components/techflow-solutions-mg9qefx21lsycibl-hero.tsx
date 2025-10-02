import { Button } from '@/components/ui/button';

export function TechflowSolutionsMg9qefx21lsyciblHero() {
  return (
    <section 
      className="techflow-solutions-mg9qefx21lsycibl-hero bg-gradient-to-br from-primary/10 to-secondary/10"
      data-testid="hero-techflow-solutions-mg9qefx21lsycibl"
    >
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Transform Your Business with AI-Powered Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Join 500+ companies that have increased productivity by 300% using our platform
          </p>
          
          <Button 
            asChild
            size="lg"
            data-testid="button-hero-cta-techflow-solutions-mg9qefx21lsycibl"
          >
            <a href="/signup">Start Free Trial</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
