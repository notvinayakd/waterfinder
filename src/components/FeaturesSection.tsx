import { Map, Check, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Map,
    title: 'Live Map',
    description: 'Real-time map showing verified water refill stations near your current location with accurate distances and directions.',
    gradient: 'from-water-blue to-water-light'
  },
  {
    icon: Check,
    title: 'Verified Spots',
    description: 'Every water station is verified by our community for cleanliness, accessibility, and water quality standards.',
    gradient: 'from-water-light to-accent'
  },
  {
    icon: Users,
    title: 'Community Added',
    description: 'Help fellow travelers by adding new water stations and sharing real-time updates about availability.',
    gradient: 'from-accent to-water-blue'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-wave-foam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-6">
            Why Choose WaterFinder?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make finding clean water effortless and reliable wherever you go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;