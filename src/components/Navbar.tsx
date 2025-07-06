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
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">

          {/* Left: Logo (Now clickable to go home) */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-float" />
            </div>
            <span className="text-xl font-bold text-ocean-deep">WaterFinder</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-water-blue focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-water-blue transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/add-spot"
              className="text-foreground hover:text-water-blue transition-all duration-200 font-medium"
            >
              Add Spot
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 rounded-2xl p-4 bg-background/80 backdrop-blur-lg shadow-xl animate-fade-in space-y-3 border border-border">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-water-blue text-lg font-medium transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/add-spot"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-water-blue text-lg font-medium transition-all duration-200"
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