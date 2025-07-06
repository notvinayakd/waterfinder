// src/pages/AddSpot.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icon issue
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Mini map click handler
function LocationPicker({ setLatLng }: { setLatLng: (pos: { lat: number, lng: number }) => void }) {
  useMapEvents({
    click(e) {
      setLatLng(e.latlng);
    },
  });
  return null;
}

const AddSpot = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !description || !latLng) return alert('Please fill all fields and pick a location');
    setLoading(true);
    const { error } = await supabase.from('spots').insert([{ name, description, ...latLng }]);
    setLoading(false);
    if (error) alert('Error adding spot: ' + error.message);
    else {
      alert('Water spot added!');
      setName('');
      setDescription('');
      setLatLng(null);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-ocean-deep">Add a New Water Spot</h2>

            <div>
              <label className="block text-sm font-medium text-muted-foreground">Name</label>
              <input
                className="mt-1 w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g. Marine Drive Station"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground">Description</label>
              <textarea
                className="mt-1 w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the station, access, cleanliness etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground">Location</label>
              <p className="text-sm text-muted-foreground">Click on the map to select a spot</p>
              {latLng && (
                <p className="text-sm mt-1 text-water-blue">
                  Lat: {latLng.lat.toFixed(5)}, Lng: {latLng.lng.toFixed(5)}
                </p>
              )}
            </div>

            <div className="pt-4">
              <Button
                onClick={handleSubmit}
                className="bg-water-blue hover:bg-ocean-deep text-white px-6 py-3 font-semibold shadow-md hover:shadow-xl transition-all"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Spot'}
              </Button>
            </div>
          </div>

          {/* Mini Map Section */}
          <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg animate-slide-up">
            <MapContainer
              center={[10.0, 76.0]}
              zoom={6.5}
              scrollWheelZoom={true}
              className="h-full w-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationPicker setLatLng={setLatLng} />
              {latLng && <Marker position={latLng} />}
            </MapContainer>
          </div>
        </div>
      </main>

      {/* Footer with spacing */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default AddSpot;
