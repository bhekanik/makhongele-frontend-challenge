import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import { Movie } from 'src/graphql/generated';
import { ListItem, ListItemText } from './styles';
import Link from 'next/link';

export interface OwnProps {
  movie: Movie;
  labelId: string;
  handleDialogOpen: (id: string) => void;
}

const MovieListItem: React.FC<OwnProps> = ({
  movie,
  labelId,
  handleDialogOpen,
}) => {
  return (
    <Link href={`/movies/${movie.id}`} as={`/movies/${movie.id}`}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={movie.title}>
            <MovieIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          id={labelId}
          primary={movie.title}
          secondary={
            <Fragment>
              <Typography
                component='span'
                variant='body2'
                style={{ display: 'inline' }}
                color='textPrimary'>
                {movie.releaseYear}
              </Typography>
              {` - ${movie.actors?.join(', ')}`}
            </Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            aria-label='comments'
            data-testid='btn__delete-todo'
            onClick={() => handleDialogOpen(movie.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Link>
  );
};

export default MovieListItem;
