import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Map, Navigation, Check } from 'lucide-react';

const MapSection = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleMapClick = () => {
    // Create ripple effect
    const newRipple = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-wave-foam to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-6">
              Explore the
              <span className="block bg-gradient-to-r from-water-blue to-water-light bg-clip-text text-transparent">
                Interactive Map
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover thousands of verified water refill stations with our interactive map. 
              Filter by amenities, ratings, and distance to find the perfect spot for your needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-water-blue rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">Real-time availability updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-water-blue rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">User reviews and ratings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-water-blue rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">Detailed station information</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={handleMapClick}
              className="bg-water-blue hover:bg-ocean-deep text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Open Full Map
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="animate-slide-up">
            <div className="relative h-96 bg-gradient-to-br from-water-light/20 to-water-blue/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              
              {/* Mock Map Interface */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-16 h-16 text-water-blue mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-semibold text-ocean-deep mb-2">Interactive Map Preview</h3>
                  <p className="text-muted-foreground">Click "Open Full Map" to see water ripples</p>
                </div>
              </div>

              {/* Static Map Points */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-water-blue rounded-full shadow-lg"></div>
              <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-water-blue rounded-full shadow-lg"></div>
              <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-water-blue rounded-full shadow-lg"></div>

              {/* Ripple Effects */}
              {ripples.map((ripple) => (
                <div
                  key={ripple.id}
                  className="absolute w-4 h-4 pointer-events-none"
                  style={{
                    left: `${ripple.x}%`,
                    top: `${ripple.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-full h-full bg-water-blue/40 rounded-full animate-ripple"></div>
                  <div className="absolute inset-0 w-full h-full bg-water-blue/30 rounded-full animate-ripple" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute inset-0 w-full h-full bg-water-blue/20 rounded-full animate-ripple" style={{ animationDelay: '0.4s' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;