import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-water.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-wave-foam/80 to-water-light/60"></div>
      </div>

      {/* Floating Water Ripples */}
      {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-water-light/20 rounded-full animate-ripple"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-water-blue/15 rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-water-light/25 rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ocean-deep mb-6 leading-tight">
            Find Water
            <span className="block bg-gradient-to-r from-water-blue to-water-light bg-clip-text text-transparent">
              Nearby
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl">Stay Hydrated</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover clean drinking water refill stations around you. Join thousands of travelers staying hydrated sustainably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-water-blue hover:bg-ocean-deep text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Use My Location
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-water-blue text-water-blue hover:bg-water-blue hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Explore Map
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-water-blue">15,000+</div>
            <div className="text-muted-foreground">Water Stations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-water-blue">50,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-water-blue">100+</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;