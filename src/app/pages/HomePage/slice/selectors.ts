import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.homePage || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  homePageState => homePageState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  homePageState => homePageState.error,
);

export const selectMovies = createSelector(
  [selectDomain],
  homePageState => homePageState.filteredMovies,
);

export const selectDateFilter = createSelector(
  [selectDomain],
  homePageState => homePageState.dateFilter,
);
