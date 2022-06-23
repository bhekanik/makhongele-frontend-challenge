import { Button } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { ButtonsWrapper, MoviesWrapper } from 'src/components/Movies/styles';
import MoviesList from 'src/components/MoviesList';
import {
  GetMoviesDocument,
  Movie,
  useDeleteMovieMutation,
  useGetMoviesQuery,
} from 'src/graphql/generated';
import { UploadDialog } from '../UploadDialog';

const Alert = (props: AlertProps) => {
  return (
    <MuiAlert
      style={{ marginBottom: '1rem' }}
      elevation={6}
      variant='filled'
      {...props}
    />
  );
};

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { data, loading, error } = useGetMoviesQuery();
  const [deleteMovie] = useDeleteMovieMutation();

  React.useEffect(() => {
    if (data?.allMovies) {
      setMovies(((data?.allMovies as unknown) as Movie[]) || []);
    }
  }, [data]);

  const handleDelete = async (id: string) => {
    try {
      await deleteMovie({
        variables: {
          id,
        },
        refetchQueries: [{ query: GetMoviesDocument }],
      });
    } catch (error) {
      console.log('error:', error);
    }
  };

  const handleOpenUploadDialog = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <MoviesWrapper>
      {error?.message && <Alert severity='error'>{error.message}</Alert>}

      <ButtonsWrapper>
        <Link href={`/movies/new`}>
          <Button color='primary' variant='contained'>
            New Movie
          </Button>
        </Link>
        <Button
          color='primary'
          variant='contained'
          onClick={handleOpenUploadDialog}>
          Upload Movies File
        </Button>
      </ButtonsWrapper>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MoviesList movies={movies} handleDelete={handleDelete} />
      )}
      <UploadDialog handleCancel={handleCancel} open={open} />
    </MoviesWrapper>
  );
};
