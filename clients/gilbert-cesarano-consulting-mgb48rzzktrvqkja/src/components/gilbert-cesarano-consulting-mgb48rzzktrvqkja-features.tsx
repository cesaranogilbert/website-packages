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
    "title": "Lightning-Fast Performance",
    "description": "Systematic, meaningful, fast, trustworthy and high-quality execution",
    "icon": "lightning"
  },
  {
    "title": "End-2-End Global Strategy Expertise",
    "description": "Global Strategy Knowhow on Cloud Architecture and End-2-End Data Lifecycle",
    "icon": "Rocket"
  },
  {
    "title": "Diamond-Clear Integrity",
    "description": "honest communication with real & trustworthy content",
    "icon": "Star"
  },
  {
    "title": "High-Valuable Network",
    "description": "Connected with high quality individuals for more value sharing and generation",
    "icon": "Spiderweb"
  },
  {
    "title": "Teamwork & Accountability",
    "description": "Collaboration focused with meaningful Team structures and always taking responsibility",
    "icon": "diamond"
  }
];

export function GilbertCesaranoConsultingMgb48rzzktrvqkjaFeatures() {
  return (
    <section className="gilbert-cesarano-consulting-mgb48rzzktrvqkja-features py-24 bg-white dark:bg-gray-900" data-testid="features-gilbert-cesarano-consulting-mgb48rzzktrvqkja">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon?.toLowerCase() || 'star'] || Star;
            
            return (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                data-testid={`feature-${index}-gilbert-cesarano-consulting-mgb48rzzktrvqkja`}
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
