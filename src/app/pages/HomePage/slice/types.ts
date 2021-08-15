import { Movie } from 'types/movie';
import { DateFilterValue } from 'types/date-filter';

/* --- STATE --- */
export interface HomePageState {
  loading: boolean;
  movies: Movie[];
  filteredMovies: Movie[];
  searchInput: string;
  dateFilter: DateFilterValue;
  error: string | null;
}

export type ContainerState = HomePageState;
