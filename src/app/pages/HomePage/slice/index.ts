import { PayloadAction } from '@reduxjs/toolkit';
import includes from 'lodash.includes';
import { Movie } from 'types/movie';
import { DateFilterValue } from 'types/date-filter';
import { isInRange } from 'utils/date';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  movies: [],
  filteredMovies: [],
  searchInput: '',
  dateFilter: [],
  loading: false,
  error: null,
};

function testMovieWithSearchInput(
  movie: Movie,
  searchInput: string | null,
): boolean {
  return includes(movie.title, searchInput);
}

function testMovieWithDateFilterValue(
  movie: Movie,
  dateFilterValue: DateFilterValue,
): boolean {
  if (typeof dateFilterValue === 'string') return true;
  if (!dateFilterValue.hasOwnProperty('length')) return true;
  if ((dateFilterValue as Date[]).length !== 2) return true;
  return isInRange(new Date(movie.showTime), dateFilterValue);
}

function filterMovies(state: HomePageState): Movie[] {
  return state.movies
    .filter(movie => testMovieWithSearchInput(movie, state.searchInput))
    .filter(movie => testMovieWithDateFilterValue(movie, state.dateFilter));
}

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadMovies(state) {
      state.loading = true;
      state.movies = initialState.movies;
      state.filteredMovies = initialState.filteredMovies;
      state.searchInput = initialState.searchInput;
      state.dateFilter = initialState.dateFilter;
      state.error = initialState.error;
    },
    moviesLoaded(state, action: PayloadAction<Movie[]>) {
      state.loading = initialState.loading;
      state.movies = action.payload;
      state.filteredMovies = action.payload;
      state.searchInput = initialState.searchInput;
      state.dateFilter = initialState.dateFilter;
      state.error = initialState.error;
    },
    moviesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = initialState.loading;
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
      state.filteredMovies = filterMovies(state);
    },
    setDateFilter(state, action: PayloadAction<DateFilterValue>) {
      state.dateFilter = action.payload;
      state.filteredMovies = filterMovies(state);
    },
  },
});

export const { actions: homePageActions, reducer } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};
