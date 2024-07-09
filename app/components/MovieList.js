'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function MovieList({ initialMovies }) {

  const [movies] = useState(initialMovies);  
  const [error] = useState('');  

  return (
    <>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {movies && movies.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <li key={movie.imdbID} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Link href={`/movie/${movie.imdbID}`}>
                {movie.Poster !== "N/A" ? (
                  <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">No Image</div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
                  <p className="text-gray-600">Year: {movie.Year}</p>
                  <p className="text-gray-600">Type: {movie.Type}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No movies to display. Try searching for a movie!</p>
      )}
    </>
  );
}