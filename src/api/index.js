import axios from 'axios';

const apiKey = 'db45881e2afb9e1808a4f023bca65e3c';
export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );
};

export const getSearchMovies = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const getOneMovies = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
};

export const getCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US&page=1`
  );
};

export const getReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
};
