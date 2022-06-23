import {
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  Typography,
} from '@material-ui/core';
import { Movie as MovieType } from 'src/graphql/generated';

import Link from 'next/link';
import styled from 'styled-components';

export interface OwnProps {
  movie: MovieType;
}

const Card = styled(MuiCard)`
  margin-top: 2rem;
`;

const Breadcrumbs = styled(MuiBreadcrumbs)`
  margin-top: 2rem;
`;

const Divider = styled(MuiDivider)`
  margin: 2rem 0;
`;

export const Movie = ({ movie }: OwnProps) => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link href='/'>Home</Link>
        <Typography color='textPrimary'>{movie.title}</Typography>
      </Breadcrumbs>
      <Card>
        <CardContent>
          <Typography color='textSecondary'>Movie Title</Typography>
          <Typography variant='h4' component='h1'>
            {movie.title}
          </Typography>
          <Divider />
          <Typography color='textSecondary'>Release Year</Typography>
          <Typography variant='h6'>{movie.releaseYear}</Typography>
          <Divider />
          <Typography color='textSecondary'>Format</Typography>
          <Typography variant='h6'>{movie.format}</Typography>
          <Divider />
          <Typography color='textSecondary'>Actors</Typography>
          <Typography variant='h6'>{movie.actors?.join(', ')}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
