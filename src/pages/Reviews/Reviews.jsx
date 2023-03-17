import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';
import styled from 'styled-components';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async id => {
      const { data } = await getReviews(id);

      setReviews([...data.results]);
    };

    fetchReviews(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {reviews.length ? (
        reviews.map(item => (
          <Item key={item.id}>
            <p>
              <b>Author: </b>
              {item.author}
            </p>
            <p>{item.content}</p>
          </Item>
        ))
      ) : (
        <h2>We don't have any reviews for this movie.</h2>
      )}
    </div>
  );
}
export default Reviews;

const Item = styled.li`
  list-style: none;
  padding-top: 20px;
`;
