import change from '../../utils/immutable';
import * as MOVIES_ACTIONS from '../actions/movies/actionTypes';

const initialState = {
  isLoading: false,
  moviesList: [],
  movieData: {},
  hasErrored: false,
  errorMessage: '',
  favourites: [],
};

export default function moviesData(state = initialState, action) {
  switch (action.type) {
    case MOVIES_ACTIONS.MOVIES_SEARCH_LOADING: {
      return change(state, { isLoading: true });
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_SUCCESS: {
      const isLoading = false;
      return change(state,
        {
          isLoading,
          moviesList: action.payload,
          errorMessage: '',
        });
    }
    case MOVIES_ACTIONS.CHANGE_FAVOURITE_MOVIE: {
      const movieId = action.payload;
      let favourites;

      if (state.favourites.includes(movieId)) {
        favourites = state.favourites.filter((entry) => entry !== movieId);
      } else {
        favourites = state.favourites.concat([action.payload]);
      }

      return change(state, { favourites });
    }
    case MOVIES_ACTIONS.MOVIES_INFORMATION_SUCCESS: {
      const isLoading = false;
      return change(state,
        {
          isLoading,
          movieData: action.payload,
          errorMessage: '',
        });
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_ERROR: {
      return change(state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.payload,
        moviesList: [],
      });
    }
    case MOVIES_ACTIONS.CLEAR_MOVIE_SEARCH: {
      return change(state, {
        moviesList: [],
      });
    }
    case MOVIES_ACTIONS.CLEAR_SELECTED_MOVIE: {
      return change(state, {
        movieData: {},
      });
    }
    case MOVIES_ACTIONS.MOVIES_DATA_RESET: {
      return initialState;
    }
    default:
      return state;
  }
}
