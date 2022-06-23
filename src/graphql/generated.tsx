import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  title: Scalars['String'];
  releaseYear: Scalars['String'];
  format: Scalars['String'];
  actors: Array<Maybe<Scalars['String']>>;
};

export type MovieFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  releaseYear?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  actors?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_neq?: Maybe<Scalars['ID']>;
  title_neq?: Maybe<Scalars['String']>;
  releaseYear_neq?: Maybe<Scalars['String']>;
  format_neq?: Maybe<Scalars['String']>;
  actors_neq?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MovieInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  releaseYear: Scalars['String'];
  format: Scalars['String'];
  actors: Array<Maybe<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMovie?: Maybe<Movie>;
  createManyMovie?: Maybe<Array<Maybe<Movie>>>;
  updateMovie?: Maybe<Movie>;
  removeMovie?: Maybe<Movie>;
};

export type MutationCreateMovieArgs = {
  title: Scalars['String'];
  releaseYear: Scalars['String'];
  format: Scalars['String'];
  actors: Array<Maybe<Scalars['String']>>;
};

export type MutationCreateManyMovieArgs = {
  data?: Maybe<Array<Maybe<MovieInput>>>;
};

export type MutationUpdateMovieArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  releaseYear?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  actors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutationRemoveMovieArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Movie?: Maybe<Movie>;
  allMovies?: Maybe<Array<Maybe<Movie>>>;
  _allMoviesMeta?: Maybe<ListMetadata>;
};

export type QueryMovieArgs = {
  id: Scalars['ID'];
};

export type QueryAllMoviesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<MovieFilter>;
};

export type Query_AllMoviesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<MovieFilter>;
};

export type AddMovieMutationVariables = Exact<{
  title: Scalars['String'];
  releaseYear: Scalars['String'];
  format: Scalars['String'];
  actors: Array<Maybe<Scalars['String']>>;
}>;

export type AddMovieMutation = { __typename?: 'Mutation' } & {
  createMovie?: Maybe<
    { __typename?: 'Movie' } & Pick<
      Movie,
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
    >
  >;
};

export type AddMoviesMutationVariables = Exact<{
  data?: Maybe<Array<Maybe<MovieInput>>>;
}>;

export type AddMoviesMutation = { __typename?: 'Mutation' } & {
  createManyMovie?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Movie' } & Pick<
          Movie,
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
        >
      >
    >
  >;
};

export type DeleteMovieMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteMovieMutation = { __typename?: 'Mutation' } & {
  removeMovie?: Maybe<
    { __typename?: 'Movie' } & Pick<
      Movie,
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
    >
  >;
};

export type GetMovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetMovieQuery = { __typename?: 'Query' } & {
  Movie?: Maybe<
    { __typename?: 'Movie' } & Pick<
      Movie,
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
      | '[object Object]'
    >
  >;
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMoviesQuery = { __typename?: 'Query' } & {
  allMovies?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Movie' } & Pick<
          Movie,
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
          | '[object Object]'
        >
      >
    >
  >;
};

export const AddMovieDocument = gql`
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
export type AddMovieMutationFn = Apollo.MutationFunction<
  AddMovieMutation,
  AddMovieMutationVariables
>;

/**
 * __useAddMovieMutation__
 *
 * To run a mutation, you first call `useAddMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieMutation, { data, loading, error }] = useAddMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      releaseYear: // value for 'releaseYear'
 *      format: // value for 'format'
 *      actors: // value for 'actors'
 *   },
 * });
 */
export function useAddMovieMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMovieMutation,
    AddMovieMutationVariables
  >,
) {
  return Apollo.useMutation<AddMovieMutation, AddMovieMutationVariables>(
    AddMovieDocument,
    baseOptions,
  );
}
export type AddMovieMutationHookResult = ReturnType<typeof useAddMovieMutation>;
export type AddMovieMutationResult = Apollo.MutationResult<AddMovieMutation>;
export type AddMovieMutationOptions = Apollo.BaseMutationOptions<
  AddMovieMutation,
  AddMovieMutationVariables
>;
export const AddMoviesDocument = gql`
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
export type AddMoviesMutationFn = Apollo.MutationFunction<
  AddMoviesMutation,
  AddMoviesMutationVariables
>;

/**
 * __useAddMoviesMutation__
 *
 * To run a mutation, you first call `useAddMoviesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMoviesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMoviesMutation, { data, loading, error }] = useAddMoviesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddMoviesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMoviesMutation,
    AddMoviesMutationVariables
  >,
) {
  return Apollo.useMutation<AddMoviesMutation, AddMoviesMutationVariables>(
    AddMoviesDocument,
    baseOptions,
  );
}
export type AddMoviesMutationHookResult = ReturnType<
  typeof useAddMoviesMutation
>;
export type AddMoviesMutationResult = Apollo.MutationResult<AddMoviesMutation>;
export type AddMoviesMutationOptions = Apollo.BaseMutationOptions<
  AddMoviesMutation,
  AddMoviesMutationVariables
>;
export const DeleteMovieDocument = gql`
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
export type DeleteMovieMutationFn = Apollo.MutationFunction<
  DeleteMovieMutation,
  DeleteMovieMutationVariables
>;

/**
 * __useDeleteMovieMutation__
 *
 * To run a mutation, you first call `useDeleteMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieMutation, { data, loading, error }] = useDeleteMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMovieMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMovieMutation,
    DeleteMovieMutationVariables
  >,
) {
  return Apollo.useMutation<DeleteMovieMutation, DeleteMovieMutationVariables>(
    DeleteMovieDocument,
    baseOptions,
  );
}
export type DeleteMovieMutationHookResult = ReturnType<
  typeof useDeleteMovieMutation
>;
export type DeleteMovieMutationResult =
  Apollo.MutationResult<DeleteMovieMutation>;
export type DeleteMovieMutationOptions = Apollo.BaseMutationOptions<
  DeleteMovieMutation,
  DeleteMovieMutationVariables
>;
export const GetMovieDocument = gql`
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

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(
  baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>,
) {
  return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(
    GetMovieDocument,
    baseOptions,
  );
}
export function useGetMovieLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMovieQuery,
    GetMovieQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(
    GetMovieDocument,
    baseOptions,
  );
}
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<
  typeof useGetMovieLazyQuery
>;
export type GetMovieQueryResult = Apollo.QueryResult<
  GetMovieQuery,
  GetMovieQueryVariables
>;
export const GetMoviesDocument = gql`
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

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMoviesQuery,
    GetMoviesQueryVariables
  >,
) {
  return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    baseOptions,
  );
}
export function useGetMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMoviesQuery,
    GetMoviesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    baseOptions,
  );
}
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<
  typeof useGetMoviesLazyQuery
>;
export type GetMoviesQueryResult = Apollo.QueryResult<
  GetMoviesQuery,
  GetMoviesQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
