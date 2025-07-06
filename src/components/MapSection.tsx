import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import { Check, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const MapSection = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [position, setPosition] = useState<[number, number] | null>(null);
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate('/map');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          setPosition([9.9312, 76.2673]); // Fallback to Kochi
        }
      );
    } else {
      setPosition([9.9312, 76.2673]);
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-wave-foam to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
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

            <div className="space-y-4 mb-10">
              {[
                "Real-time availability updates",
                "User reviews and ratings",
                "Detailed station information"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-water-blue rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* 💧 Hero-style animated button */}
            <button
              onClick={handleMapClick}
              className="relative group/btn overflow-hidden px-8 py-4 text-lg font-semibold border-2 border-water-blue text-white rounded-2xl transition-all duration-300 bg-water-blue hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 shadow-xl flex items-center gap-2"
            >
              {/* ✨ Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 z-10 pointer-events-none"></div>

              {/* 🌊 Ripple */}
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full group-hover/btn:animate-water-ripple"></span>
              </span>

              {/* Label */}
              <span className="relative z-20 tracking-wide flex items-center gap-2">
                <Navigation className="w-5 h-5" /> Open Full Map
              </span>

              {/* 💡 Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-md z-0"></div>

              {/* 🩵 Bottom line effects */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-blue-500/90 to-cyan-400/90 blur-sm"></div>

              {/* 🌟 Flares */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent rounded-3xl z-0"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-3xl z-0"></div>
            </button>
          </div>

          {/* Right Side - Mini Map */}
          <div className="animate-slide-up">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl z-0">
              {position ? (
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="h-full w-full z-10"
                >
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      You're here! 🌍<br />
                      Lat: {position[0].toFixed(4)}, Lng: {position[1].toFixed(4)}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Locating you...
                </div>
              )}

              {/* 💦 Optional ripple visuals */}
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
