import change from '../../utils/immutable';
import * as MOVIES_ACTIONS from '../actions/movies/actionTypes';

const initialState = {
  omdbApiKey: process.env.OMDB_API_KEY,
  isLoading: false,
  moviesList: [],
  hasErrored: false,
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
        });
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_ERROR: {
      return change(state, {
        isLoading: false,
        hasErrored: true,
      })
    }
    case MOVIES_ACTIONS.MOVES_DATA_RESET: {
      return initialState;
    }
    default:
      return state;
  }
}
