import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

/* components */
import MoviePreview from '../../components/MoviePreview';

/* redux */
import {
  searchMovie,
  clearMoviesSearch,
  clearSelectedMovie,
  setFavourite,
} from '../../redux/actions/movies';
import { MoviesDataState } from '../../redux/reducers/moviesReducer';
import { StoreState, StoreDispatch } from '../../redux';

/* styles */
import styles from './MovieSearch.module.css';
import EmptyState from '../../components/EmptyState';

import { MESSAGES } from '../../language/en';

interface MovieSearchProps extends RouteComponentProps<{ movieId: string }> {
  moviesData: MoviesDataState,
  searchMovie: (searchValue: string) => void,
  setFavourite: (id: string) => void,
  clearMoviesSearch: () => void,
  clearSelectedMovie: () => void,
}

interface MovieSearchState {
  searchValue: string,
}

class MovieSearch extends React.Component<MovieSearchProps, MovieSearchState> {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.props.clearMoviesSearch();
    this.props.clearSelectedMovie();
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovie(this.state.searchValue);
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleMovieSelect = (movieId: string) => {
    this.props.history.push({
      pathname: '/movie',
      state: {
        movieId,
      },
    });
  }

  handleSetFavourite = (movieId) => {
    this.props.setFavourite(movieId);
  }

  renderMoviePreview = () => this.props.moviesData.moviesList.map((moviePreviewData) => {
    const handleSelectId = () => this.handleMovieSelect(moviePreviewData.imdbID);
    const handleSetFavourite = () => this.handleSetFavourite(moviePreviewData.imdbID);
    return (
      <MoviePreview
        key={moviePreviewData.imdbID}
        moviePreviewData={moviePreviewData}
        handleMovieSelect={handleSelectId}
        handleSetFavourite={handleSetFavourite}
      />
    );
  });

  renderSearchResults = () => {
    const { moviesData: { hasErrored, moviesList, errorMessage } } = this.props;
    let searchResults;

    if (hasErrored) {
      searchResults = errorMessage;
    }

    if (moviesList.length) {
      searchResults = this.renderMoviePreview();
    } else {
      searchResults = <EmptyState />;
    }

    return (
      <div className={styles.listContainer}>
        {searchResults}
      </div>
    );
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className={styles.container}>
        <form id="movie-search-form" action="" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="title"
            value={searchValue}
            placeholder={MESSAGES.SEARCH_MOVIES}
            required
            onChange={this.handleChange}
          />
        </form>
        {this.renderSearchResults()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  moviesData: state.moviesData,
});

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  searchMovie: (searchValue: string) => dispatch(searchMovie(searchValue)),
  clearMoviesSearch: () => dispatch(clearMoviesSearch()),
  clearSelectedMovie: () => dispatch(clearSelectedMovie()),
  setFavourite: (movieId: string) => dispatch(setFavourite(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
