import { gql } from '@apollo/client';

const getMovie = gql`
  query getMovie($id: ID!) {
    Movie(id: $id) {
      id
      title
      releaseYear
      format
      actors
    }
  }
`;

export default getMovie;
