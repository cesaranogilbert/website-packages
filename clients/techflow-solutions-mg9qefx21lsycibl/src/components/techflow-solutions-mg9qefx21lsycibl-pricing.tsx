import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    "name": "Starter",
    "price": "$29",
    "currency": "USD",
    "billingPeriod": "monthly",
    "features": [
      "Up to 1,000 automation runs/month",
      "5 active workflows",
      "Basic integrations",
      "Email support",
      "7-day free trial"
    ],
    "isPopular": false
  },
  {
    "name": "Professional",
    "price": "$99",
    "currency": "USD",
    "billingPeriod": "monthly",
    "features": [
      "Up to 10,000 automation runs/month",
      "Unlimited workflows",
      "All integrations",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "14-day free trial"
    ],
    "isPopular": true
  },
  {
    "name": "Enterprise",
    "price": "$299",
    "currency": "USD",
    "billingPeriod": "monthly",
    "features": [
      "Unlimited automation runs",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
      "SLA guarantees",
      "Advanced security features",
      "Onboarding & training",
      "30-day free trial"
    ],
    "isPopular": false
  }
];

export function TechflowSolutionsMg9qefx21lsyciblPricing() {
  return (
    <section className="techflow-solutions-mg9qefx21lsycibl-pricing py-24 bg-gray-50 dark:bg-gray-800" data-testid="pricing-techflow-solutions-mg9qefx21lsycibl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`p-8 rounded-lg border-2 ${tier.isPopular ? 'border-primary shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}
              data-testid={`pricing-tier-${index}-techflow-solutions-mg9qefx21lsycibl`}
            >
              {tier.isPopular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4 mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {tier.price}
                <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                  /{tier.billingPeriod || 'month'}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features?.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" data-testid={`button-pricing-${index}-techflow-solutions-mg9qefx21lsycibl`}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
