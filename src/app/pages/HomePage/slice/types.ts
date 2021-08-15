import { Movie } from 'types/movie';

/* --- STATE --- */
export interface HomePageState {
  loading: boolean;
  movies: Movie[];
  error?: string | null;
}

export type ContainerState = HomePageState;
