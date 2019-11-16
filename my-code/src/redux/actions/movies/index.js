import * as MOVIES_ACTIONS from './actionTypes';

function moviesIsLoading() {
  return {
    type: MOVIES_ACTIONS.MOVIES_SEARCH_LOADING
  };
}

export function searchMovie(searchValue) {
  return function (dispatch, getState) {
    console.log(getState());
    console.log('search value: ', searchValue);
    dispatch(moviesIsLoading());
    return fetch('http://www.omdbapi.com/?apikey=ea52ef3&s=dark%20knight')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => console.log(error))
  }
}
