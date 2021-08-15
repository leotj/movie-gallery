import { PayloadAction } from '@reduxjs/toolkit';
import includes from 'lodash.includes';
import { Movie } from 'types/movie';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  movies: [],
  filteredMovies: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadMovies(state) {
      state.loading = true;
      state.movies = [];
      state.filteredMovies = [];
      state.error = null;
    },
    moviesLoaded(state, action: PayloadAction<Movie[]>) {
      state.loading = false;
      state.movies = action.payload;
      state.filteredMovies = action.payload;
      state.error = null;
    },
    moviesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    searchMovies(state, action: PayloadAction<string>) {
      state.filteredMovies = state.movies.filter(function (movie) {
        return includes(movie.title, action.payload);
      });
    },
  },
});

export const { actions: homePageActions, reducer } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};
