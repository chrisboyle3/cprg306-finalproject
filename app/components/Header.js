import { useState } from 'react';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="glass-effect text-white p-4 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold neon-text mb-4 md:mb-0">Movie Database</h1>
        <nav className="flex items-center">
          <form onSubmit={handleSubmit} className="flex mr-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies..."
              className="p-2 rounded-l-md text-gray-800"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </form>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}