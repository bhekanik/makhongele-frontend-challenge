import {
  CardContent,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Breadcrumbs,
  Button,
  Card,
  Form,
  TextField,
} from 'src/components/AddMovieForm/styles';
import {
  GetMoviesDocument,
  MovieInput,
  useAddMovieMutation,
} from 'src/graphql/generated';

export enum Format {
  VHS = 'VHS',
  DVD = 'DVD',
  BluRay = 'BluRay',
}

export const AddMovieForm = () => {
  const router = useRouter();
  const [addMovie, { loading }] = useAddMovieMutation();
  const [actors, setActors] = useState<string>('');
  const [newMovie, setNewMovie] = useState<MovieInput>({
    id: '',
    title: '',
    releaseYear: '',
    format: '',
    actors: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'actors') setActors(value);
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name as string]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const movie: MovieInput = {
      ...newMovie,
      actors: actors.split(',').map((actor) => actor.trim()),
    };
    try {
      await addMovie({
        variables: {
          ...movie,
        },
        update: () => {
          router.push('/');
        },
        refetchQueries: [{ query: GetMoviesDocument }],
      });
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link href='/'>Home</Link>
        <Typography color='textPrimary'>New movie</Typography>
      </Breadcrumbs>
      <Card>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <TextField
              value={newMovie.title}
              data-testid='textfield__title'
              name='title'
              label='Title'
              onChange={handleChange}
              variant='outlined'
            />
            <TextField
              value={newMovie.releaseYear}
              data-testid='textfield__releaseyear'
              name='releaseYear'
              label='Release Year'
              onChange={handleChange}
              variant='outlined'
            />
            <FormControl>
              <InputLabel htmlFor='format'>Format</InputLabel>
              <Select
                native
                value={newMovie.format}
                onChange={handleSelectChange}
                inputProps={{
                  name: 'format',
                  id: 'format',
                }}>
                {Object.values(Format).map((item) => (
                  <option key={item} value={item.toUpperCase()}>
                    {item.toUpperCase()}
                  </option>
                ))}
              </Select>
            </FormControl>
            <TextField
              value={actors}
              data-testid='textfield__actors'
              name='actors'
              label='Actors (seperated by comma)'
              onChange={handleChange}
              variant='outlined'
            />
            <Button
              disabled={loading}
              type='submit'
              variant='contained'
              color='primary'>
              Add Movie
            </Button>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
