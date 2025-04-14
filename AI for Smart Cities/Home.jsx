import { useState } from 'react';
import HomeModal from '../components/HomeModal';

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="p-10 text-center">
      <HomeModal show={showModal} onClose={() => setShowModal(false)} />
      <h1 className="text-3xl font-bold mb-4">AI Smart City Monitor</h1>
      <p className="text-gray-600 mb-6">Harness AI to track pollution and manage waste efficiently.</p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Learn More
      </button>
    </div>
  );
}