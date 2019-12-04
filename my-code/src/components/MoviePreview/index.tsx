import React from 'react';
import { useSelector } from 'react-redux';

/* styles */
import styles from './MoviePreview.module.css';
import iconHeartFull from '../../../resources/icon-heart-full.svg';
import iconHeartWhite from '../../../resources/icon-heart-white.svg';

/* components */
import Typography from '../Typography';

const isFavouriteSelector = (imdbID) => (state) => state.moviesData.favourites.includes(imdbID);

interface MoviePreviewDataType {
  Poster: string,
  Title: string,
  imdbID: string,
  Year: string,
}

interface MoviePreviewProps {
  moviePreviewData: MoviePreviewDataType,
  handleMovieSelect: () => void,
  handleSetFavourite: () => void,
}

const defaultMovieData: MoviePreviewDataType = {
  Poster: '',
  Title: '',
  imdbID: '',
  Year: '',
}

const MoviePreview: React.FC<MoviePreviewProps> = (
  { moviePreviewData = defaultMovieData, handleMovieSelect, handleSetFavourite }: MoviePreviewProps
) => {
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


export default MoviePreview;
