import axios from 'axios';

export const getTrendingMovies = () => {
  const apiKey = '3d474b4b143267599ff69bdae2b1bdff';
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );
};

export default getTrendingMovies;
