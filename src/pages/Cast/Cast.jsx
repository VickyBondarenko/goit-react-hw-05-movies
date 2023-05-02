import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api';
import styled from 'styled-components';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCast = async id => {
      const { data } = await getCast(id);

      setCast([...data.cast]);
    };

    fetchCast(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosterURL = posterPath => {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return (
    <CastList>
      {cast.length ? (
        cast.map(item => (
          <Item key={item.credit_id}>
            <img
              src={
                item.profile_path
                  ? getPosterURL(item.profile_path)
                  : 'http://placehold.it/200x300/000/fff&text=no foto'
              }
              alt={item.name}
              width={250}
            ></img>
            <h2>{item.name}</h2>
            <p>
              <b>Character:</b> {item.character}
            </p>
          </Item>
        ))
      ) : (
        <h2>We don't have any information of cast for this movie.</h2>
      )}
    </CastList>
  );
}
export default Cast;

const CastList = styled.ul`
  display: grid;
  padding: 20px 0;
  margin: 0;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
