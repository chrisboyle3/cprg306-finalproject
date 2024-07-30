"use client";

import { useRouter } from 'next/navigation';

export default function MovieDetail({ movie }) {
  const router = useRouter();

  if (!movie) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        ← Back to Search
      </button>
      <main>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src={movie.Poster} alt={movie.Title} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-xl mb-2">{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
            <p className="mb-4">{movie.Genre}</p>
            <p className="mb-4"><strong>Director:</strong> {movie.Director}</p>
            <p className="mb-4"><strong>Writers:</strong> {movie.Writer}</p>
            <p className="mb-4"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="mb-2"><strong>Awards:</strong> {movie.Awards}</p>
            <div className="mb-4">
              {movie.Ratings && movie.Ratings.map((rating, index) => (
                <p key={index}><strong>{rating.Source}:</strong> {rating.Value}</p>
              ))}
            </div>
            <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
