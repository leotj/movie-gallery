import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { AutocompleteInputChangeReason } from '@material-ui/unstyled/AutocompleteUnstyled/useAutocomplete';
import { Movie } from 'types/movie';
import { convertURLToHTTPS } from 'utils/request';
import MovieListItemBar from './components/MovieListItemBar';
import TopBar from './components/TopBar';
import {
  selectLoading,
  selectMovies,
  selectDateFilter,
} from './slice/selectors';
import { useHomePageSlice } from './slice';

export function HomePage() {
  const { actions } = useHomePageSlice();

  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectLoading);
  const dateFilterValue = useSelector(selectDateFilter);

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

  const searchInputOptions = Array.from(
    new Set(movies.map(movie => movie.title)),
  );

  const handleSearchInputChange = (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => {
    dispatch(actions.setSearchInput(value));
  };

  const handleDateFilterChange = (value: Date) => {
    dispatch(actions.setDateFilter(value));
  };

  return (
    <>
      <Helmet>
        <title>Movie Gallery | Home</title>
        <meta name="description" content="Movie Gallery" />
      </Helmet>
      <Grid container justifyContent="center">
        <TopBar
          searchInput={{
            options: searchInputOptions,
            onInputChange: handleSearchInputChange,
          }}
          dateFilter={{
            value: dateFilterValue,
            onChange: handleDateFilterChange,
          }}
        />
        {isLoading && <CircularProgress />}
        <ImageList>
          {movies.map((movie: Movie) => (
            <ImageListItem
              key={`${movie.id}${movie.title}`}
              onClick={() => handleItemClick(movie.id)}
            >
              <img
                src={convertURLToHTTPS(movie.image)}
                srcSet={convertURLToHTTPS(movie.image)}
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
