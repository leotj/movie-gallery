import { MovieDetails } from 'types/movie-details';

export interface MovieDetailsPageState {
  loading: boolean;
  movieDetails: MovieDetails | null;
  error?: string | null;
}

export type ContainerState = MovieDetailsPageState;
