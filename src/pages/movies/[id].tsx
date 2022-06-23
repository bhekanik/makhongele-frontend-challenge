import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AddMovieForm } from 'src/components/AddMovieForm';
import { Movie } from 'src/components/Movie';
import { useGetMovieQuery } from 'src/graphql/generated';
import { Layout } from 'src/layouts/Layout';

const MoviesForm: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieId, setMovieId] = useState<string>('');
  const [isNew, setIsNew] = useState<boolean>(false);

  const { data, loading, refetch } = useGetMovieQuery({
    variables: {
      id: movieId,
    },
  });

  useEffect(() => {
    if (!id) {
      return;
    }
    setMovieId(id as string);
    refetch();
    if (id === 'new') {
      setIsNew(true);
    }
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  console.log('data:', data);
  return (
    <Layout>
      {isNew ? (
        <AddMovieForm />
      ) : (
        <div>{data?.Movie && <Movie movie={data.Movie} />}</div>
      )}
    </Layout>
  );
};

export default MoviesForm;
