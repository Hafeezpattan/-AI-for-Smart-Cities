import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PollutionChart = () => {
  const data = {
    labels: ['2011', '2012', '2013', '2014', '2015'],
    datasets: [
      {
        label: 'PM2.5 Levels',
        data: [90, 110, 120, 100, 95],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Pollution Trends (PM2.5)</h3>
      <Line data={data} />
    </div>
  );
};

export default PollutionChart;

// WasteChart.jsx (placeholder)
const WasteChart = () => (
  <div className="text-center p-10 border rounded-lg shadow">
    ⚠️ Waste Data Coming Soon...
  </div>
);
