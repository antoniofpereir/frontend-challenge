import { ReduxThunkAction, ReduxThunkDispatch } from '../types';
import { MoviesActionType, MoviesActionTypesEnum } from './actionTypes';
import { RootState } from '../../reducers';

export function moviesReset(): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.MOVIES_DATA_RESET,
  };
}

function moviesLoading(): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.MOVIES_SEARCH_LOADING,
  };
}

function moviesError(error: string): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.MOVIES_SEARCH_ERROR,
    payload: error,
  };
}

function moviesSearchSuccess(searchResult: object): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.MOVIES_SEARCH_SUCCESS,
    payload: searchResult,
  };
}

function movieInformationSuccess(movieInformation: object): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.MOVIES_INFORMATION_SUCCESS,
    payload: movieInformation,
  };
}

export function setFavourite(movieId: string): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.CHANGE_FAVOURITE_MOVIE,
    payload: movieId,
  };
}

export function clearMoviesSearch(): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.CLEAR_MOVIE_SEARCH,
  };
}

export function clearSelectedMovie(): MoviesActionType {
  return {
    type: MoviesActionTypesEnum.CLEAR_SELECTED_MOVIE,
  };
}

export function searchMovie(searchValue: string): ReduxThunkAction {
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

export function getMovieInformation(movieId: string): ReduxThunkAction {
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
