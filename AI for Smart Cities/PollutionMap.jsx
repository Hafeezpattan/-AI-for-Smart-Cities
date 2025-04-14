import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PollutionMap = ({ data }) => {
  const pollutionColors = (aqi) => {
    if (aqi <= 50) return 'green';
    if (aqi <= 100) return 'yellow';
    if (aqi <= 200) return 'orange';
    if (aqi <= 300) return 'red';
    return 'purple';
  };

  return (
    <MapContainer center={[23.2599, 77.4126]} zoom={5} scrollWheelZoom={true} className="h-[500px] w-full rounded-xl shadow-md">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((loc, index) => (
        <CircleMarker
          key={index}
          center={[loc.lat, loc.lng]}
          radius={12}
          pathOptions={{ color: pollutionColors(loc.aqi) }}
        >
          <Popup>
            <div className="text-sm">
              <strong>{loc.location}</strong><br />
              AQI: {loc.aqi}<br />
              PM2.5: {loc.pm25} µg/m³
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default PollutionMap;
