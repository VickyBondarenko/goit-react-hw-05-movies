import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getOneMovies } from 'api';
import styled from 'styled-components';

export function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async id => {
      const { data } = await getOneMovies(id);

      setMovie(data);
    };

    fetchMovie(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const score = Math.round(movie.vote_average * 10);
  useEffect(() => {
    if (movie.genres) {
      setGenres(movie.genres.map(item => item.name).join(' '));
    }
  }, [movie.genres]);
  const getPosterURL = posterPath => {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return (
    <>
      <Wrapper>
        {getPosterURL(movie.poster_path) && (
          <img
            src={getPosterURL(movie.poster_path)}
            alt={movie.title}
            width={250}
          />
        )}
        <div>
          <h1>{movie.title}</h1>
          <p>User score: {score} %</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </Wrapper>
      <InfoTitle>
        <h2>Additional information</h2>
        <ul>
          <Link to={`/movies/${movieId}/cast`}>
            <p className="">Cast</p>
          </Link>
          <Link to={`/movies/${movieId}/reviews`}>
            <p className="">Reviews</p>
          </Link>
        </ul>
      </InfoTitle>
      <div>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
export default MovieDetails;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;
const InfoTitle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-decoration: none;
`;
