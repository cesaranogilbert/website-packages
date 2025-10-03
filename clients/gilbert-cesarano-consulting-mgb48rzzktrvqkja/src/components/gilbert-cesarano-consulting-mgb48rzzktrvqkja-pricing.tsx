import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    "name": "Starter",
    "price": "$49/month",
    "features": [
      "- content material",
      "- monthly 1h strategy group call",
      "- execution list"
    ],
    "isPopular": false,
    "currency": "USD",
    "billingPeriod": "monthly"
  },
  {
    "name": "Professional",
    "price": "999/month",
    "features": [
      "Weekly 1on1 Strategy Call",
      "Content Material ",
      "Monthly Group Call",
      "Execution List ",
      "Exclusive Material",
      "Notion workspace & Templates"
    ],
    "isPopular": false,
    "currency": "USD",
    "billingPeriod": "monthly"
  },
  {
    "name": "Enterprise",
    "price": "$19999/month",
    "features": [
      "Remote Daily Execution Support & Availability",
      "Weekly 1on1 Strategy Call",
      "Customized Content Material ",
      "Monthly Group Call",
      "Customized Execution List ",
      "Exclusive Material",
      "Customized Notion workspace & Templates",
      "Network & Knowledge Sharing"
    ],
    "isPopular": true,
    "currency": "USD",
    "billingPeriod": "monthly"
  },
  {
    "name": "VIP",
    "price": "$249000/year",
    "features": [
      "Remote & Onsite Daily Execution Support & Availability",
      "Yearly ROI & Performance Analysis",
      "Quaterly Steering Meeting",
      "Weekly 1on1 Strategy Call",
      "Customized Content Material ",
      "Monthly Group Call",
      "Customized Execution List ",
      "Exclusive Material",
      "Customized Notion workspace & Templates",
      "Network & Knowledge Sharing"
    ],
    "isPopular": false,
    "currency": "USD",
    "billingPeriod": "monthly"
  }
];

export function GilbertCesaranoConsultingMgb48rzzktrvqkjaPricing() {
  return (
    <section className="gilbert-cesarano-consulting-mgb48rzzktrvqkja-pricing py-24 bg-gray-50 dark:bg-gray-800" data-testid="pricing-gilbert-cesarano-consulting-mgb48rzzktrvqkja">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`p-8 rounded-lg border-2 ${tier.isPopular ? 'border-primary shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}
              data-testid={`pricing-tier-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}
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
              <Button className="w-full" data-testid={`button-pricing-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
