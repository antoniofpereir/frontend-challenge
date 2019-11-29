export interface MoviesReducerState {
  isLoading: boolean,
  moviesList: Array<object>,
  movieData: object,
  hasErrored: boolean,
  errorMessage: string,
  favourites: Array<string>,
}
