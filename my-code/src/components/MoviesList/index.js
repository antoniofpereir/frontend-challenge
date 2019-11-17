import React from 'react';
import { connect } from 'react-redux';

/* styles */
import styles from './MoviesList.module.css';

/* components */
import MoviePreview from '../MoviePreview';

/* utils */
import history from '../../utils/history';

class MoviesList extends React.Component {
  handleMovieSelect = (movieId) => {
    history.push({
      pathname: '/movie',
      movieId
    })
  }

  renderMoviePreview = () => this.props.moviesList.map(moviePreviewData => {
    const handleSelectId = () => this.handleMovieSelect(moviePreviewData.imdbID);
    return <MoviePreview
      key={moviePreviewData.imdbID}
      moviePreviewData={moviePreviewData}
      handleMovieSelect={handleSelectId}
    />;
  });

  render() {
    return (
      <div className={styles.container}>{this.renderMoviePreview()}</div>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.moviesData.moviesList,
});

export default connect(mapStateToProps)(MoviesList);
