import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Map as MapIcon, Navigation, Check } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

const MapSection = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [position, setPosition] = useState<[number, number] | null>(null);

  const handleMapClick = () => {
    const newRipple = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error('Geolocation error:', err);
          setPosition([9.9312, 76.2673]); // Fallback to Kochi
        }
      );
    } else {
      setPosition([9.9312, 76.2673]); // Geolocation not supported
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-wave-foam to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side same as before */}
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

            <Button
              size="lg"
              onClick={handleMapClick}
              className="bg-water-blue hover:bg-ocean-deep text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Open Full Map
            </Button>
          </div>

          {/* Right side: Dynamic map */}
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
                      Latitude: {position[0].toFixed(4)}, Longitude: {position[1].toFixed(4)}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Locating you...
                </div>
              )}

              {/* Ripples */}
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
