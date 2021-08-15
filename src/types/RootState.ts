import { HomePageState } from 'app/pages/HomePage/slice/types';
import { MovieDetailsPageState } from 'app/pages/MovieDetailsPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  homePage: HomePageState;
  movieDetailsPage: MovieDetailsPageState;
}
