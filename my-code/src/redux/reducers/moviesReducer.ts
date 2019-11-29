import { MoviesReducerState } from './types';
import { MoviesActionType, MoviesActionTypesEnum } from '../actions/movies/actionTypes';
import change from '../../utils/immutable';

const initialState: MoviesReducerState = {
  isLoading: false,
  moviesList: [],
  movieData: {},
  hasErrored: false,
  errorMessage: '',
  favourites: [],
}

export default function moviesData(state = initialState, action: MoviesActionType): MoviesReducerState {
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
      let favourites;

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
