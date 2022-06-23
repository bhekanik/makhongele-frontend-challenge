import { gql } from '@apollo/client';

const addMovie = gql`
  mutation addMovie(
    $title: String!
    $releaseYear: String!
    $format: String!
    $actors: [String]!
  ) {
    createMovie(
      title: $title
      releaseYear: $releaseYear
      format: $format
      actors: $actors
    ) {
      id
      title
      releaseYear
      format
      actors
    }
  }
`;

export default addMovie;
