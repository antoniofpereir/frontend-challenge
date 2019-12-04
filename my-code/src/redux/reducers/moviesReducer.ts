import { MoviesActionType, MoviesActionTypesEnum } from '../actions/movies/types';
import change from '../../utils/immutable';

export type RatingsTypes = {
  Source: string,
  Value: string,
};

export type MovieDataTypes = {
  Runtime?: string,
  Title?: string,
  Year?: string,
  Rated?: string,
  imdbRating?: string,
  Ratings?: Array<RatingsTypes>,
  Plot?: string,
  Actors?: string,
  Genre?: string,
  Director?: string,
  Poster?: string,
  imdbID?: string,
};

export type MoviesPreviewTypes = {
  Poster: string,
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface MoviesDataState {
  isLoading: boolean;
  moviesList: Array<MoviesPreviewTypes>;
  movieData: MovieDataTypes;
  hasErrored: boolean;
  errorMessage: string;
  favourites: Array<string>;
}

const initialState: MoviesDataState = {
  isLoading: false,
  moviesList: [],
  movieData: {},
  hasErrored: false,
  errorMessage: '',
  favourites: [],
};

function moviesData(state = initialState, action: MoviesActionType): MoviesDataState {
  switch (action.type) {
    case MoviesActionTypesEnum.MOVIES_SEARCH_LOADING: {
      return change(state, { isLoading: true });
    }
    case MoviesActionTypesEnum.MOVIES_SEARCH_SUCCESS: {
      const isLoading = false;
      return change(state,
        {
          isLoading,
          moviesList: action.payload,
          errorMessage: '',
        });
    }
    case MoviesActionTypesEnum.CHANGE_FAVOURITE_MOVIE: {
      const movieId = action.payload;
      let favourites: string[];

      if (state.favourites.includes(movieId)) {
        favourites = state.favourites.filter((entry) => entry !== movieId);
      } else {
        favourites = state.favourites.concat([action.payload]);
      }

      return change(state, { favourites });
    }
    case MoviesActionTypesEnum.MOVIES_INFORMATION_SUCCESS: {
      const isLoading = false;
      return change(state,
        {
          isLoading,
          movieData: action.payload,
          errorMessage: '',
        });
    }
    case MoviesActionTypesEnum.MOVIES_SEARCH_ERROR: {
      return change(state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.payload,
        moviesList: [],
      });
    }
    case MoviesActionTypesEnum.CLEAR_MOVIE_SEARCH: {
      return change(state, {
        moviesList: [],
      });
    }
    case MoviesActionTypesEnum.CLEAR_SELECTED_MOVIE: {
      return change(state, {
        movieData: {},
      });
    }
    case MoviesActionTypesEnum.MOVIES_DATA_RESET: {
      return initialState;
    }
    default:
      return state;
  }
}

export default moviesData;
