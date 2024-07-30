import MovieDetail from '../../components/MovieDetail';
import { getMovieDetails } from '@/app/services/movieApi';

export default async function MoviePage({ params }) {
  const movie = await getMovieDetails(params.id);

  return <MovieDetail movie={movie} />;
}