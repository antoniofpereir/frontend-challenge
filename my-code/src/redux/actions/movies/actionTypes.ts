import { Action } from 'redux';

export enum MoviesActionTypesEnum {
  MOVIES_SEARCH_LOADING,
  MOVIES_SEARCH_SUCCESS,
  MOVIES_SEARCH_ERROR,
  MOVIES_INFORMATION_SUCCESS,
  MOVIES_DATA_RESET,
  CHANGE_FAVOURITE_MOVIE,
  CLEAR_MOVIE_SEARCH,
  CLEAR_SELECTED_MOVIE,
};

interface MoviesAction<T=any> extends Action {
  type: MoviesActionTypesEnum,
  payload?: T,
}

interface MoviesSearchLoading extends MoviesAction {
  type: MoviesActionTypesEnum.MOVIES_SEARCH_LOADING,
};

interface MoviesSearchSuccess extends MoviesAction {
  type: MoviesActionTypesEnum.MOVIES_SEARCH_SUCCESS,
  payload: object,
};

interface MoviesSearchError extends MoviesAction {
  type: MoviesActionTypesEnum.MOVIES_SEARCH_ERROR,
  payload: string,
};

interface MoviesInformationSuccess extends MoviesAction {
  type: MoviesActionTypesEnum.MOVIES_INFORMATION_SUCCESS,
  payload: object,
};

interface MoviesDataReset extends MoviesAction {
  type: MoviesActionTypesEnum.MOVIES_DATA_RESET,
};

interface ChangeFavouriteMovie extends MoviesAction {
  type: MoviesActionTypesEnum.CHANGE_FAVOURITE_MOVIE,
  payload: string,
};

interface ClearMovieSearch extends MoviesAction {
  type: MoviesActionTypesEnum.CLEAR_MOVIE_SEARCH,
};

interface ClearSelectedMovie extends MoviesAction {
  type: MoviesActionTypesEnum.CLEAR_SELECTED_MOVIE,
};

export type MoviesActionType =
  | MoviesSearchLoading
  | MoviesSearchSuccess
  | MoviesSearchError
  | MoviesInformationSuccess
  | MoviesDataReset
  | ChangeFavouriteMovie
  | ClearMovieSearch
  | ClearSelectedMovie
