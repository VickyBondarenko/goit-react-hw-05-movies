import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'api';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const submit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams(
      form.searchStr.value !== '' ? { query: form.searchStr.value } : {}
    );
  };
  const [searchMovie, setSearchMovie] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchTrend = async () => {
      const movies = await getSearchMovies(query);
      setSearchMovie(movies.data.results);
    };
    if (query) {
      fetchTrend();
    } else {
      setSearchMovie(null);
    }
  }, [query]);

  return (
    <div>
      <Form onSubmit={submit}>
        <Inpyt name="searchStr" type="text" />
        <Button>Search</Button>
      </Form>
      <ul>
        {searchMovie &&
          searchMovie.map(item => (
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

export default Movies;

const Form = styled.form`
  padding-top: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: black;
  background-color: #d3d3d34c;
  border-radius: 4px;

  &:hover {
    color: lightcoral;
    box-shadow: 1px 1px 5px 2px gray;
    cursor: pointer;
  }
`;

const Inpyt = styled.input`
  width: 300px;
  height: 34px;
  border-radius: 4px;
  border: 1px solid black;
  margin-right: 4px;
`;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
