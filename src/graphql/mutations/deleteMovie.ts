import { gql } from '@apollo/client';

const deleteMovie = gql`
  mutation deleteMovie($id: ID!) {
    removeMovie(id: $id) {
      id
      title
      releaseYear
      format
      actors
    }
  }
`;

export default deleteMovie;
