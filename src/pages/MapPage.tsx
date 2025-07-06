import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import WaterFinderPopup from '@/components/WaterFinderPopup';

// Fix leaflet marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type Spot = {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
};

const RoutingControl = ({ destination }: { destination: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    let control: L.Routing.Control;

    const addRoute = (userLatLng: L.LatLng) => {
      control = (L.Routing.control as any)({
        waypoints: [userLatLng, L.latLng(destination)],
        createMarker: () => null,
        routeWhileDragging: false,
        show: false,
        addWaypoints: false,
        lineOptions: {
          styles: [{ color: '#3b82f6', weight: 6 }],
          extendToWaypoints: true,
          missingRouteTolerance: 10,
        },
      }).addTo(map);
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLatLng = L.latLng(pos.coords.latitude, pos.coords.longitude);
        addRoute(userLatLng);
      },
      (err) => {
        console.error('Geolocation error:', err.message);
        alert('Could not access your location to show the route.');
      }
    );

    return () => {
      if (control) map.removeControl(control);
    };
  }, [destination, map]);

  return null;
};

const MapPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<[number, number] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchSpots = async () => {
      const { data, error } = await supabase.from('spots').select('id, name, description, lat, lng');
      if (error) {
        console.error('Error fetching spots:', error);
      } else {
        setSpots(data);
      }
    };
    fetchSpots();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error('Failed to get location:', err.message);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-ocean-deep mb-6 text-center">
          Explore Water Refill Stations
        </h1>
        <div className="h-[75vh] rounded-2xl shadow-xl overflow-hidden">
          <MapContainer center={[10, 76]} zoom={6.5} scrollWheelZoom className="h-full w-full z-0">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {userLocation && (
              <Marker
                position={userLocation}
                icon={L.divIcon({
                  className: '',
                  html: `
                    <div class="relative flex flex-col items-center">
                      <div class="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                      <div class="w-1 h-5 bg-blue-600"></div>
                      <div class="text-xs text-blue-800 mt-1">You are here</div>
                    </div>
                  `,
                  iconSize: [20, 40],
                  iconAnchor: [10, 40],
                })}
              />
            )}

            {spots.map((spot) => (
              <Marker
                key={spot.id}
                position={[spot.lat, spot.lng]}
                eventHandlers={{
                  click: () => setSelectedSpot([spot.lat, spot.lng]),
                }}
              >
                <Popup autoPan>
                  <WaterFinderPopup
                    stationName={spot.name}
                    description={spot.description}
                    address={`Lat: ${spot.lat.toFixed(4)}, Lng: ${spot.lng.toFixed(4)}`}
                    onGetDirections={() => setSelectedSpot([spot.lat, spot.lng])}
                  />
                </Popup>
              </Marker>
            ))}

            {selectedSpot && <RoutingControl destination={selectedSpot} />}
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapPage;
