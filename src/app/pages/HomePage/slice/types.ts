import { Movie } from 'types/movie';

/* --- STATE --- */
export interface HomePageState {
  loading: boolean;
  movies: Movie[];
  filteredMovies: Movie[];
  error?: string | null;
}

export type ContainerState = HomePageState;
