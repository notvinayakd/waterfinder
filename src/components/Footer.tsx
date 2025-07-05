const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-water-blue to-water-light rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-float"></div>
              </div>
              <span className="text-2xl font-bold">WaterFinder</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Helping travelers find clean drinking water refill stations worldwide. 
              Stay hydrated, stay sustainable, stay connected with our global community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-water-blue transition-colors duration-200">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-water-blue transition-colors duration-200">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-water-blue transition-colors duration-200">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>support@waterfinder.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 WaterFinder. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;