import { useState } from 'react';
import DashboardModal from '../components/DashboardModal';
import PollutionChart from '../components/PollutionChart';
import WasteChart from '../components/WasteChart';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(true);
  const [view, setView] = useState("pollution");

  return (
    <div className="p-6">
      <DashboardModal show={showModal} onClose={() => setShowModal(false)} />
      <h1 className="text-2xl font-bold mb-4 text-center">Smart City Dashboard</h1>

      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <select
          className="border rounded p-2"
          onChange={(e) => setView(e.target.value)}
          value={view}
        >
          <option value="pollution">Pollution View</option>
          <option value="waste">Waste Management View</option>
        </select>

        <input
          type="date"
          className="border rounded p-2"
          placeholder="Filter by Date"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {view === 'pollution' ? <PollutionChart /> : <WasteChart />}
      </div>
    </div>
  );
}