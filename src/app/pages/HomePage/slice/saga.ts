import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { homePageActions as actions } from '.';
import { Movie } from 'types/movie';

export function* getMovies() {
  yield delay(500);
  try {
    const requestURL =
      'https://611768f830022f0017a05dee.mockapi.io/api/v1/movies';
    const movies: Movie[] = yield call(request, requestURL);
    yield put(actions.moviesLoaded(movies));
  } catch (err) {
    yield put(actions.moviesError(err));
  }
}

export function* homePageSaga() {
  yield takeLatest(actions.loadMovies.type, getMovies);
}
