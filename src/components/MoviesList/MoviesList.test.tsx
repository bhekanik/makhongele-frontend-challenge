import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import * as React from 'react';
import MoviesList, { OwnProps } from 'src/components/MoviesList';

afterEach(cleanup);

const props: OwnProps = {
  movies: [
    {
      id: 'some-id',
      title: 'Test Movie 1',
      releaseYear: '2000',
      actors: [],
    },
    {
      id: 'another-id',
      title: 'Test Movie 2',
      releaseYear: '2002',
      actors: [],
    },
  ],
  handleDelete: jest.fn(),
};

jest.mock('src/components/MovieListItem', () => {
  const MockMovieItem = (): JSX.Element => <div>movie item</div>;
  return MockMovieItem;
});

describe('MoviesList', () => {
  it('should render the correct number of movies items', () => {
    const component: RenderResult = render(<MoviesList {...props} />);
    const movieItems = component.getAllByText(/movie item/i);
    expect(movieItems.length).toBe(props.movies.length);
  });
});
