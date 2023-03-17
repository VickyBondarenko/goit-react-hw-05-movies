import { getTrendingMovies } from 'api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      const movies = await getTrendingMovies();
      setTrendMovie(movies.data.results);
    };

    fetchTrend();
  }, []);
  console.log(trendMovie);
  return (
    <div>
      <h1>Hello word</h1>
      <ul>
        {trendMovie &&
          trendMovie.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>
                <p className="">{item.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
