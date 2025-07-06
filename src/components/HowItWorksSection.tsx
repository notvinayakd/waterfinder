import { MapPin, Check, Plus } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Find Your Location',
    description:
      'Allow location access to discover water refill stations nearby or search for specific areas.',
  },
  {
    icon: Check,
    title: 'Choose a Station',
    description:
      'Browse verified water stations with ratings, photos, and real-time availability status.',
  },
  {
    icon: Plus,
    title: 'Add New Spots',
    description:
      'Help the community by adding new water stations and sharing updates about existing ones.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-wave-foam/40 to-water-light/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with WaterFinder is simple. Follow these three easy steps to find clean water anywhere.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center animate-slide-up px-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon with individual underline */}
              <div className="relative mb-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center shadow-xl">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* ⬇ Individual underline below each icon */}
                <div className="mt-3 w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-water-blue to-transparent blur-sm"></div>
                <div className="mt-0.5 w-16 h-0.5 mx-auto bg-gradient-to-r from-water-blue to-water-light rounded-full blur-sm opacity-80"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-ocean-deep mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
