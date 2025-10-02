import { Zap, Star, Shield, Rocket, Heart, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  zap: Zap,
  star: Star,
  shield: Shield,
  rocket: Rocket,
  heart: Heart,
  trending: TrendingUp,
};

const features = [
  {
    "title": "Intelligent Automation",
    "description": "Automate repetitive tasks with our advanced AI algorithms that learn from your workflows",
    "icon": "Zap"
  },
  {
    "title": "Real-Time Analytics",
    "description": "Get instant insights into your business metrics with beautiful, actionable dashboards",
    "icon": "BarChart3"
  },
  {
    "title": "Seamless Integration",
    "description": "Connect with 50+ tools you already use. No coding required, set up in minutes",
    "icon": "Plug"
  },
  {
    "title": "24/7 Support",
    "description": "Our expert team is always available to help you succeed with dedicated support",
    "icon": "Headphones"
  },
  {
    "title": "Enterprise Security",
    "description": "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards",
    "icon": "Shield"
  },
  {
    "title": "Custom Workflows",
    "description": "Build unlimited custom automation workflows tailored to your unique needs",
    "icon": "Settings"
  }
];

export function TechflowSolutionsMg9qefx21lsyciblFeatures() {
  return (
    <section className="techflow-solutions-mg9qefx21lsycibl-features py-24 bg-white dark:bg-gray-900" data-testid="features-techflow-solutions-mg9qefx21lsycibl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon?.toLowerCase() || 'star'] || Star;
            
            return (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                data-testid={`feature-${index}-techflow-solutions-mg9qefx21lsycibl`}
              >
                <IconComponent className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
