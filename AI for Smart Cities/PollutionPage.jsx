import PollutionMap from '../components/PollutionMap';

const sampleData = [
  { location: 'Delhi', lat: 28.6139, lng: 77.2090, aqi: 312, pm25: 190 },
  { location: 'Mumbai', lat: 19.0760, lng: 72.8777, aqi: 121, pm25: 89 },
  { location: 'Bengaluru', lat: 12.9716, lng: 77.5946, aqi: 78, pm25: 42 },
  { location: 'Kolkata', lat: 22.5726, lng: 88.3639, aqi: 185, pm25: 95 },
];

export default function PollutionPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">🌍 Pollution Hotspot Tracker</h2>
      <PollutionMap data={sampleData} />
    </div>
  );
}
