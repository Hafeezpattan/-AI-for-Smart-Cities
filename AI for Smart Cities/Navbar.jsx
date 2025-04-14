import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-700">🌆 SmartCity AI</h1>
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:underline text-gray-700">Home</Link>
        <Link to="/dashboard" className="hover:underline text-gray-700">Dashboard</Link>
        <Link to="/pollution" className="hover:underline text-gray-700">Pollution Tracker</Link>
        <Link to="/waste" className="hover:underline text-gray-700">Waste Management</Link>
        <Link to="/reports" className="hover:underline text-gray-700">Reports</Link>
        <Link to="/contact" className="hover:underline text-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
