import * as MOVIES_ACTIONS from './actionTypes';

export function moviesReset() {
  return {
    type: MOVIES_ACTIONS.MOVIES_DATA_RESET,
  };
}

function moviesLoading() {
  return {
    type: MOVIES_ACTIONS.MOVIES_SEARCH_LOADING,
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

export function setFavourite(movieId) {
  return {
    type: MOVIES_ACTIONS.CHANGE_FAVOURITE_MOVIE,
    payload: movieId,
  };
}

export function clearMoviesSearch() {
  return {
    type: MOVIES_ACTIONS.CLEAR_MOVIE_SEARCH,
  };
}

export function clearSelectedMovie() {
  return {
    type: MOVIES_ACTIONS.CLEAR_SELECTED_MOVIE,
  };
}

export function searchMovie(searchValue) {
  return async (dispatch, getState, omdbApiKey) => {
    dispatch(moviesLoading());
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchValue}`);
      const responseJson = await response.json();
      if (responseJson.Error) {
        throw responseJson.Error;
      }
      await dispatch(moviesSearchSuccess(responseJson.Search));
    } catch (error) {
      console.error(error);
      dispatch(moviesError(error));
    }
  };
}

export function getMovieInformation(movieId) {
  return async (dispatch, getState, omdbApiKey) => {
    dispatch(moviesLoading());
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movieId}`);
      const responseJson = await response.json();
      await dispatch(movieInformationSuccess(responseJson));
    } catch (error) {
      console.error(error);
      dispatch(moviesError(error));
    }
  };
}
