import React from 'react';
import { useSelector } from 'react-redux';

/* styles */
import styles from './MoviePreview.module.css';
import iconHeartFull from '../../../resources/icon-heart-full.svg';
import iconHeartGrey from '../../../resources/icon-heart-grey.svg';
import iconHeartWhite from '../../../resources/icon-heart-white.svg';

/* components */
import Typography from '../Typography';

function MoviePreview({ moviePreviewData, handleMovieSelect, handleSetFavourite }) {
  const isFavourite = useSelector((state) => state.moviesData.favourites.includes(moviePreviewData.imdbID));

  return (
    <div className={styles.container}>
      <img
        className={styles.previewImg}
        src={moviePreviewData.Poster}
        alt={moviePreviewData.Title}
      />
      <div className={styles.overlay}>
        <img src={isFavourite ? iconHeartFull : iconHeartWhite} className={styles.heart} onClick={handleSetFavourite}/>
        <div className={styles.textContainer} onClick={handleMovieSelect}>
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

export default MoviePreview;
