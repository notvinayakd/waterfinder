import { MapPin, Check, Plus } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Find Your Location',
    description: 'Allow location access to discover water refill stations nearby or search for specific areas.',
    step: '01'
  },
  {
    icon: Check,
    title: 'Choose a Station',
    description: 'Browse verified water stations with ratings, photos, and real-time availability status.',
    step: '02'
  },
  {
    icon: Plus,
    title: 'Add New Spots',
    description: 'Help the community by adding new water stations and sharing updates about existing ones.',
    step: '03'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with WaterFinder is simple. Follow these three easy steps to find clean water anywhere.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-water-light via-water-blue to-water-light transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Step Number */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <step.icon className="w-6 h-6 text-water-blue" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;