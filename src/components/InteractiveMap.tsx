import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Compass, MapPin, Layers, Plus, Check } from 'lucide-react';
import { Destination, MapPoint } from '../types/travel';

interface InteractiveMapProps {
  destination: Destination;
  onAddPointToItinerary?: (point: MapPoint) => void;
  selectedSpotCoords?: [number, number] | null;
}

type MapFilter = 'all' | 'attraction' | 'food' | 'accommodation' | 'experience' | 'transit';

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  destination,
  onAddPointToItinerary,
  selectedSpotCoords,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const [activeCategory, setActiveCategory] = useState<MapFilter>('all');
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const mapPoints = destination.mapPoints || [];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: destination.coordinates,
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // CartoDB Dark Matter / Voyager stylish tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
    } else {
      mapInstanceRef.current.setView(destination.coordinates, 12);
    }

    return () => {
      // Don't necessarily destroy on every small state update, handle re-centering
    };
  }, [destination.id]);

  // Center if a specific spot was clicked from tourist spots
  useEffect(() => {
    if (selectedSpotCoords && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedSpotCoords, 14, { duration: 1.2 });
    }
  }, [selectedSpotCoords]);

  // Render & Filter Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    const categoryColors: Record<string, string> = {
      attraction: '#f59e0b', // amber
      food: '#ef4444', // rose/red
      accommodation: '#3b82f6', // blue
      experience: '#10b981', // emerald
      transit: '#8b5cf6', // purple
    };

    mapPoints.forEach((point) => {
      if (activeCategory !== 'all' && point.category !== activeCategory) {
        return;
      }

      const color = categoryColors[point.category] || '#f59e0b';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            background-color: ${color};
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 3px solid #ffffff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s;
          ">
            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #ffffff;"></div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([point.lat, point.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setSelectedPoint(point);
      });

      markersRef.current[point.id] = marker;
    });
  }, [destination.id, activeCategory, mapPoints]);

  const handleAdd = (point: MapPoint) => {
    if (onAddPointToItinerary) {
      onAddPointToItinerary(point);
      setAddedIds((prev) => [...prev, point.id]);
      setTimeout(() => {
        setAddedIds((prev) => prev.filter((id) => id !== point.id));
      }, 2500);
    }
  };

  return (
    <section id="map-section" className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>Chapter X · Spatial Geography</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Interactive Map of {destination.name}
            </h2>
            <p className="text-sm text-stone-400 mt-2">
              Locate landmarks, heritage bistros, accommodations, and transit hubs. Click any marker to view details and add to your chapter.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Pins' },
              { id: 'attraction', label: '🏛️ Attractions', color: 'text-amber-400' },
              { id: 'food', label: '🍲 Dining', color: 'text-rose-400' },
              { id: 'accommodation', label: '🏨 Stays', color: 'text-blue-400' },
              { id: 'experience', label: '✨ Experiences', color: 'text-emerald-400' },
              { id: 'transit', label: '🚇 Transit', color: 'text-purple-400' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id as MapFilter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeCategory === f.id
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Canvas and Info Tray */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[520px] bg-stone-900">
          <div ref={mapContainerRef} className="w-full h-full z-10" />

          {/* Floating Selected Point Info Card */}
          {selectedPoint && (
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-96 z-30 bg-stone-900/95 backdrop-blur-xl border border-stone-700 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {selectedPoint.category}
                </span>
                {selectedPoint.cost && (
                  <span className="text-xs text-stone-300 font-semibold bg-stone-800 px-2 py-0.5 rounded-md">
                    {selectedPoint.cost}
                  </span>
                )}
              </div>

              <h4 className="font-serif text-lg font-bold text-white mb-1.5">
                {selectedPoint.title}
              </h4>
              <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                {selectedPoint.description}
              </p>

              <div className="flex items-center gap-2">
                {onAddPointToItinerary && (
                  <button
                    onClick={() => handleAdd(selectedPoint)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      addedIds.includes(selectedPoint.id)
                        ? 'bg-emerald-500 text-stone-950'
                        : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20'
                    }`}
                  >
                    {addedIds.includes(selectedPoint.id) ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Itinerary!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Itinerary</span>
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={() => setSelectedPoint(null)}
                  className="px-3 py-2 rounded-xl bg-stone-800 text-stone-400 hover:text-white text-xs font-semibold"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
