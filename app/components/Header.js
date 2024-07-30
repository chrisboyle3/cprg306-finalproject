'use client';
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();      
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();      
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="glass-effect text-white p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold neon-text">Movie Database</h1>
        
        <form onSubmit={handleSubmit} className="flex-grow mx-4">
          <div className="flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies..."
              className="p-2 rounded-l-md text-gray-800 w-1/2"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 ml-2">
              Search
            </button>
          </div>
        </form>

        <nav>
          {user ? (
            <div className="flex items-center">
              <span className="mr-4">Welcome, {user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}