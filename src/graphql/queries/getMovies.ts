import { gql } from '@apollo/client';

const getMovies = gql`
  query getMovies {
    allMovies {
      id
      title
      releaseYear
      format
      actors
    }
  }
`;

export default getMovies;
