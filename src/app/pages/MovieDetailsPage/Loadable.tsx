/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const MovieDetailsPage = lazyLoad(
  () => import('./index'),
  module => module.MovieDetailPage,
);
