import React from 'react';
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
    }
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
      movieId
    })
  }

  handleSetFavourite = (movieId) => {
    this.props.setFavourite(movieId);
  }

  renderMoviePreview = () => this.props.moviesData.moviesList.map(moviePreviewData => {
    const handleSelectId = () => this.handleMovieSelect(moviePreviewData.imdbID);
    const handleSetFavourite = () => this.handleSetFavourite(moviePreviewData.imdbID);
    return <MoviePreview
      key={moviePreviewData.imdbID}
      moviePreviewData={moviePreviewData}
      handleMovieSelect={handleSelectId}
      handleSetFavourite={handleSetFavourite}
    />;
  });

  renderSearchResults = () => {
    let searchResults;

    if (this.props.moviesData.hasErrored) {
      searchResults = this.props.moviesData.errorMessage;
    }

    if (this.props.moviesData.moviesList.length) {
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
    return (
      <div className={styles.container}>
        <form id="movie-search-form" action="" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.searchValue}
            placeholder={MESSAGES.SEARCH_MOVIES}
            required
            autoFocus
            onChange={this.handleChange}
          />
        </form>
        {this.renderSearchResults()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesData: state.moviesData,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: searchValue => dispatch(searchMovie(searchValue)),
  clearMoviesSearch: () => dispatch(clearMoviesSearch()),
  clearSelectedMovie: () => dispatch(clearSelectedMovie()),
  setFavourite: movieId => dispatch(setFavourite(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
