import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-float" />
            </div>
            <span className="text-xl font-bold text-ocean-deep">WaterFinder</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-water-blue focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center Links for Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-water-blue transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/add-spot"
              className="text-foreground hover:text-water-blue transition-colors duration-200"
            >
              Add Spot
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-background/90 backdrop-blur-md rounded-xl px-4 py-3 text-center shadow-lg space-y-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-water-blue transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/add-spot"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-water-blue transition-colors duration-200"
            >
              Add Spot
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
