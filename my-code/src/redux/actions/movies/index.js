import * as MOVIES_ACTIONS from './actionTypes';

function moviesLoading() {
  return {
    type: MOVIES_ACTIONS.MOVIES_SEARCH_LOADING
  };
}

function moviesError(error) {
  return {
    type: MOVIES_ACTIONS.MOVIES_SEARCH_ERROR,
    payload: error,
  };
}

function moviesSearchSuccess(searchResult) {
  return {
    type: MOVIES_ACTIONS.MOVIES_SEARCH_SUCCESS,
    payload: searchResult,
  };
}

function movieInformationSuccess(movieInformation) {
  return {
    type: MOVIES_ACTIONS.MOVIES_INFORMATION_SUCCESS,
    payload: movieInformation,
  };
}

export function searchMovie(searchValue) {
  return async function (dispatch, getState) {
    dispatch(moviesLoading());
    const apiKey = getState().moviesData.omdbApiKey;
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}`);
      const responseJson = await response.json();
      dispatch(moviesSearchSuccess(responseJson.Search));
    } catch (error) {
      console.error(error);
      dispatch(moviesError(error));
    }
  }
}

export function getMovieInformation(movieId) {
  return async function (dispatch, getState) {
    dispatch(moviesLoading());
    const apiKey = getState().moviesData.omdbApiKey;
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
      const responseJson = await response.json();
      dispatch(movieInformationSuccess(responseJson));
    } catch (error) {
      console.error(error);
      dispatch(moviesError(error));
    }
  }
}
