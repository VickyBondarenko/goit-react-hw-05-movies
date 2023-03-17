import { getTrendingMovies } from 'api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
  const [trendMovie, setTrendMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrend = async () => {
      const movies = await getTrendingMovies();
      setTrendMovie(movies.data.results);
    };

    fetchTrend();
  }, []);

  return (
    <div>
      <ul>
        {trendMovie &&
          trendMovie.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <p className="">{item.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Home;
