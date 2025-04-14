const HomeModal = ({ show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
          <h2 className="text-xl font-bold mb-2">Welcome to AI Smart City Monitor</h2>
          <ul className="mb-4 list-disc list-inside text-sm">
            <li>🔍 Real-time Pollution Monitoring</li>
            <li>♻️ Automated Waste Classification</li>
            <li>📊 AI-powered Trend Forecasting</li>
          </ul>
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeModal;
  
  // DashboardModal.jsx
  const DashboardModal = ({ show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
          <h2 className="text-xl font-bold mb-2">Explore Your Smart City Dashboard</h2>
          <p className="text-sm text-gray-700 mb-4">
            Monitor and analyze your city's environmental data with filters and visual insights.
          </p>
          <ul className="mb-4 list-disc list-inside text-sm">
            <li>🌍 Select Area to Monitor</li>
            <li>📅 Filter by Date & Time</li>
            <li>📊 Toggle Pollution or Waste View</li>
          </ul>
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Let’s Explore
            </button>
          </div>
        </div>
      </div>
    );
  };
       