import { gql } from '@apollo/client';

const addMovies = gql`
  mutation addMovies($data: [MovieInput]) {
    createManyMovie(data: $data) {
      id
      title
      releaseYear
      format
      actors
    }
  }
`;

export default addMovies;
