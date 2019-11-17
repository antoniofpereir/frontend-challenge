import React from 'react';

/* styles */
import styles from './MoviePreview.module.css';

function MoviePreview({ moviePreviewData, handleMovieSelect }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.previewImg}
        src={moviePreviewData.Poster}
        alt={moviePreviewData.Title}
        onClick={handleMovieSelect}
      />
    </div>
  );
}

export default MoviePreview;
