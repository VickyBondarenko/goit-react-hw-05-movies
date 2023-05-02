import { getTrendingMovies } from 'api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export function Home() {
  const [trendMovie, setTrendMovie] = useState([]);
  const location = useLocation();
  console.log('trendMovie', trendMovie);
  const getPosterURL = posterPath => {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  useEffect(() => {
    const fetchTrend = async () => {
      const movies = await getTrendingMovies();
      setTrendMovie(movies.data.results);
    };

    fetchTrend();
  }, []);

  return (
    <div>
      <CardGrid>
        {trendMovie &&
          trendMovie.map(item => (
            <Card key={item.id}>
              <Link
                to={`/movies/${item.id}`}
                state={{ from: location }}
                style={{ 'text-decoration': 'none' }}
              >
                <div>
                  {getPosterURL(item.poster_path) && (
                    <img
                      src={getPosterURL(item.poster_path)}
                      alt={item.title}
                      width={250}
                    />
                  )}
                  <TextWrapper>
                    <MovieTitle>{item.title}</MovieTitle>
                    <MovieScore>
                      User score: {item.vote_average.toFixed(2)}
                    </MovieScore>
                  </TextWrapper>
                </div>
              </Link>
            </Card>
          ))}
      </CardGrid>
    </div>
  );
}
export default Home;

const CardGrid = styled.ul`
  padding: 0;
  list-style: none;
  gap: 20px;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  /* display: grid;
  padding: 20px 10px;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
`;

const Card = styled.li`
  max-width: 250px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 105px;
  justify-content: space-between;
  color: black;
`;
const MovieTitle = styled.p`
  font-size: 24px;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
`;

const MovieScore = styled.p`
  margin: 0;
`;
