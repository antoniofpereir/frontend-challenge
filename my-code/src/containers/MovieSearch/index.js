import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* components */
import MoviePreview from '../../components/MoviePreview';

/* redux */
import {
  searchMovie,
  clearMoviesSearch,
  clearSelectedMovie,
  setFavourite,
} from '../../redux/actions/movies';

/* styles */
import styles from './MovieSearch.module.css';
import EmptyState from '../../components/EmptyState';

import { MESSAGES } from '../../language/en';

class MovieSearch extends React.Component {
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

  handleMovieSelect = (movieId) => {
    this.props.history.push({
      pathname: '/movie',
      movieId,
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

MovieSearch.propTypes = {
  moviesData: PropTypes.shape({
    isLoading: PropTypes.bool,
    moviesList: PropTypes.array,
    movieData: PropTypes.shape(),
    hasErrored: PropTypes.bool,
    errorMessage: PropTypes.string,
    favourites: PropTypes.array,
  }).isRequired,
  searchMovie: PropTypes.func.isRequired,
  setFavourite: PropTypes.func.isRequired,
  clearMoviesSearch: PropTypes.func.isRequired,
  clearSelectedMovie: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  moviesData: state.moviesData,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (searchValue) => dispatch(searchMovie(searchValue)),
  clearMoviesSearch: () => dispatch(clearMoviesSearch()),
  clearSelectedMovie: () => dispatch(clearSelectedMovie()),
  setFavourite: (movieId) => dispatch(setFavourite(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
