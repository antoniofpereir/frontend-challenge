import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

/* styles */
import styles from './MoviePreview.module.css';
import iconHeartFull from '../../../resources/icon-heart-full.svg';
import iconHeartWhite from '../../../resources/icon-heart-white.svg';

/* components */
import Typography from '../Typography';

const isFavouriteSelector = (imdbID) => (state) => state.moviesData.favourites.includes(imdbID);

function MoviePreview({ moviePreviewData, handleMovieSelect, handleSetFavourite }) {
  const isFavourite = useSelector(isFavouriteSelector(moviePreviewData.imdbID));
  const iconHeart = isFavourite ? iconHeartFull : iconHeartWhite;

  return (
    <div className={styles.container}>
      <img
        className={styles.previewImg}
        src={moviePreviewData.Poster}
        alt={moviePreviewData.Title}
      />
      <div className={styles.overlay}>
        <img
          src={iconHeart}
          alt={`heart-${moviePreviewData.imdbID}`}
          className={styles.heart}
          onClick={handleSetFavourite}
        />
        <div className={styles.textContainer} role="link" tabIndex={0} onClick={handleMovieSelect}>
          <Typography variant="medium1">
            {moviePreviewData.Title}
          </Typography>
          <Typography variant="regular1">
            {moviePreviewData.Year}
          </Typography>
        </div>
      </div>
    </div>
  );
}

MoviePreview.defaultProps = {
  moviePreviewData: {
    Poster: '',
    Title: '',
    imdbID: '',
    Year: '',
  },
};

MoviePreview.propTypes = {
  moviePreviewData: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    imdbID: PropTypes.string,
    Year: PropTypes.string,
  }),
  handleMovieSelect: PropTypes.func.isRequired,
  handleSetFavourite: PropTypes.func.isRequired,
};

export default MoviePreview;
