import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import MovieListItemBar from './components/MovieListItemBar';
import { selectLoading, selectMovies } from './slice/selectors';
import { useHomePageSlice } from './slice';
import { Movie } from '../../../types/movie';

export function HomePage() {
  const { actions } = useHomePageSlice();

  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadMovies());
  });

  let history = useHistory();

  const handleItemClick = (id: string) => {
    history.push(`/details/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>Movie Gallery | Home</title>
        <meta name="description" content="Movie Gallery" />
      </Helmet>
      <Grid container justifyContent="center">
        {isLoading && <CircularProgress />}
        <ImageList>
          {movies.map((movie: Movie) => (
            <ImageListItem
              key={`${movie.id}${movie.title}`}
              onClick={() => handleItemClick(movie.id)}
            >
              <img
                src={movie.image}
                srcSet={movie.image}
                alt={movie.title}
                loading="lazy"
              />
              <MovieListItemBar {...movie} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
}
