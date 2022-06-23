export const typeDefs = `
""""""
type Query {
  """"""
  Movie(id: ID!): Movie

  """"""
  allMovies(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MovieFilter): [Movie]

  """"""
  _allMoviesMeta(page: Int, perPage: Int, filter: MovieFilter): ListMetadata
}

""""""
type Movie {
  """"""
  id: ID!

  """"""
  title: String!

  """"""
  releaseYear: String!

  """"""
  format: String!

  """"""
  actors: [String]!
}

""""""
input MovieFilter {
  """"""
  q: String

  """"""
  ids: [ID]

  """"""
  id: ID

  """"""
  title: String

  """"""
  releaseYear: String

  """"""
  format: String

  """"""
  actors: [String]

  """"""
  id_neq: ID

  """"""
  title_neq: String

  """"""
  releaseYear_neq: String

  """"""
  format_neq: String

  """"""
  actors_neq: [String]
}

""""""
type ListMetadata {
  """"""
  count: Int
}

""""""
type Mutation {
  """"""
  createMovie(title: String!, releaseYear: String!, format: String!, actors: [String]!): Movie

  """"""
  createManyMovie(data: [MovieInput]): [Movie]

  """"""
  updateMovie(id: ID!, title: String, releaseYear: String, format: String, actors: [String]): Movie

  """"""
  removeMovie(id: ID!): Movie
}

""""""
input MovieInput {
  """"""
  id: ID!

  """"""
  title: String!

  """"""
  releaseYear: String!

  """"""
  format: String!

  """"""
  actors: [String]!
}
`