import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-float"></div>
            </div>
            <span className="text-xl font-bold text-ocean-deep">WaterFinder</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-water-blue transition-colors duration-200">
              Home
            </a>
            <a href="#add-spot" className="text-foreground hover:text-water-blue transition-colors duration-200">
              Add Spot
            </a>
            <a href="#about" className="text-foreground hover:text-water-blue transition-colors duration-200">
              About
            </a>
          </div>

          <Button 
            className="bg-water-blue hover:bg-ocean-deep text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;