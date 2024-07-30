"use client"

import { useState } from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';
import { searchMovies } from './services/movieApi';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await searchMovies(searchTerm);
    setMovies(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="glass-effect p-6">
          {movies.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 gradient-text">Search Results</h2>
              <MovieList initialMovies={movies} />
            </>
          ) : (
            <p className="text-center text-gray-600">Enter a search term to find movies.</p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}