import { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'types/movie';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  movies: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadMovies(state) {
      state.loading = true;
      state.error = null;
      state.movies = [];
    },
    moviesLoaded(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    moviesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: homePageActions, reducer } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};
