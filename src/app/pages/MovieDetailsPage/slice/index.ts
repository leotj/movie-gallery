import { PayloadAction } from '@reduxjs/toolkit';
import { MovieDetails } from 'types/movie-details';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { movieDetailsPageSaga } from './saga';
import { MovieDetailsPageState } from './types';

export const initialState: MovieDetailsPageState = {
  loading: false,
  movieDetails: null,
  error: null,
};

const slice = createSlice({
  name: 'movieDetailsPage',
  initialState,
  reducers: {
    loadMovieDetails(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.movieDetails = null;
    },
    movieDetailsLoaded(state, action: PayloadAction<MovieDetails>) {
      state.loading = false;
      state.error = null;
      state.movieDetails = action.payload;
    },
    movieDetailsError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: movieDetailsPageActions, reducer } = slice;

export const useMovieDetailsPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: movieDetailsPageSaga });
  return { actions: slice.actions };
};
