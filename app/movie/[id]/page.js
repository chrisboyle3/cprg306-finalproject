import MovieDetail from '../../components/MovieDetail';

async function getMovie(id) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=2dfad89f&i=${id}`);
  const data = await res.json();
  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error || "Failed to fetch movie");
  }
}

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  return <MovieDetail movie={movie} />;
}