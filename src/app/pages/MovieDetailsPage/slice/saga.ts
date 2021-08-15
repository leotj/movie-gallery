import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { MovieDetails } from 'types/movie-details';
import { request } from 'utils/request';
import { movieDetailsPageActions as actions } from '.';

export function* getMovieDetails(action) {
  const movieId = action.payload;

  yield delay(500);

  const requestURL = `https://611768f830022f0017a05dee.mockapi.io/api/v1/movies/${movieId}`;

  try {
    const movieDetails: MovieDetails = yield call(request, requestURL);
    yield put(actions.movieDetailsLoaded(movieDetails));
  } catch (err) {
    yield put(actions.movieDetailsError(err));
  }
}

export function* movieDetailsPageSaga() {
  yield takeLatest(actions.loadMovieDetails.type, getMovieDetails);
}
