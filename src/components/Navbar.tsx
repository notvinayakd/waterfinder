import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-water-blue">WaterFinder</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-foreground hover:text-water-blue">Home</a>
            <a href="#map" className="text-foreground hover:text-water-blue">Map</a>
            <a href="#add" className="text-foreground hover:text-water-blue">Add Spot</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-water-blue focus:outline-none">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-background px-4 pb-4">
          <a href="#home" className="block py-2 text-foreground hover:text-water-blue">Home</a>
          <a href="#map" className="block py-2 text-foreground hover:text-water-blue">Map</a>
          <a href="#add" className="block py-2 text-foreground hover:text-water-blue">Add Spot</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
