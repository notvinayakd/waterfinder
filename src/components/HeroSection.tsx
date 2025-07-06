import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import heroImage from '@/assets/hero-water.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [showRipple, setShowRipple] = useState(false);

  const handleExploreClick = () => {
    setShowRipple(true); // show the ripple
    setIsExiting(true);  // fade out
    setTimeout(() => {
      navigate('/map');
    }, 700); // enough time for ripple + fade
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-wave-foam/80 to-water-light/60"></div>
      </div>

      {/* Ripple Effect */}
      {showRipple && (
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-50 w-0 h-0 rounded-full bg-blue-400/20 animate-ripple-screen" />
      )}

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
            <button
              onClick={handleExploreClick}
              className="relative group/btn overflow-hidden px-8 py-4 text-lg font-semibold border-2 border-water-blue text-white rounded-2xl transition-all duration-300 bg-water-blue hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 shadow-xl"
            >
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 z-10 pointer-events-none"></div>

              {/* Ripple */}
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full group-hover/btn:animate-water-ripple"></span>
              </span>

              <span className="relative z-20 tracking-wide">Explore Map</span>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-md z-0"></div>

              {/* Accents */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-blue-500/90 to-cyan-400/90 blur-sm"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent rounded-3xl z-0"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-3xl z-0"></div>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
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
