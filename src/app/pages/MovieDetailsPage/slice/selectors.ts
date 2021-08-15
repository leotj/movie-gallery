import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) =>
  state.movieDetailsPage || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  movieDetailPageState => movieDetailPageState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  movieDetailPageState => movieDetailPageState.loading,
);

export const selectMovieDetails = createSelector(
  [selectDomain],
  movieDetailPageState => movieDetailPageState.movieDetails,
);

export const selectSynopsis = createSelector(
  [selectMovieDetails],
  movieDetails => movieDetails?.synopsis,
);

export const selectSummary = createSelector(
  [selectMovieDetails],
  movieDetails => movieDetails?.summary,
);

export const selectTitle = createSelector(
  [selectSummary],
  summary => summary?.title,
);

export const selectLike = createSelector(
  [selectSummary],
  summary => summary?.like,
);

export const selectShowTime = createSelector(
  [selectSummary],
  summary => summary?.showTime,
);

export const selectImage = createSelector(
  [selectSummary],
  summary => summary?.image,
);
