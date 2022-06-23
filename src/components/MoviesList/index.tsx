import { TextField } from '@material-ui/core';
import { useState } from 'react';
import fuzzysearch from 'src/app/lib/fuzzySearch';
import MovieListItem from 'src/components/MovieListItem';
import { List } from 'src/components/MoviesList/styles';
import { Movie } from 'src/graphql/generated';
import DeleteConfirmDialog from '../DeleteConfirmDialog';

export interface OwnProps {
  movies: Movie[];
  handleDelete: (id: string) => void;
}

const MoviesList: React.FC<OwnProps> = ({ movies, handleDelete }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleDialogOpen = (id: string) => {
    setOpen(true);
    setSelectedMovie(id);
  };

  const handleCancel = () => {
    setOpen(false);
    setSelectedMovie('');
  };

  const handleDeleteConfirm = () => {
    handleDelete(selectedMovie);
    setOpen(false);
  };

  return (
    <>
      <TextField
        style={{ margin: '2rem 0' }}
        fullWidth
        value={query}
        data-testid='textfield__query'
        name='query'
        label='Search by movie title or actor name'
        onChange={handleChange}
        variant='outlined'
      />
      <List dense style={{ overflowY: 'auto', height: '80%' }}>
        {[...movies]
          .sort((a, b) => {
            const titleA = a.title;
            const titleB = b.title;
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
          })
          .filter((movie) => {
            let found = false;
            if (fuzzysearch(query, movie.title)) found = true;
            if (fuzzysearch(query, movie.actors!.join())) found = true;
            return found;
          })
          .map((movie) => {
            const labelId = `checkbox-list-secondary-label-${movie}`;
            return (
              <MovieListItem
                key={movie.id}
                labelId={labelId}
                handleDialogOpen={handleDialogOpen}
                movie={movie}
              />
            );
          })}
      </List>
      <DeleteConfirmDialog
        handleDelete={handleDeleteConfirm}
        handleCancel={handleCancel}
        open={open}
      />
    </>
  );
};

export default MoviesList;
