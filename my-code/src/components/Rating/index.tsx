import React from 'react';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './Rating.module.css';
import imdbLogo from '../../../resources/logo-imdb.svg';
import rottingLogo from '../../../resources/logo-rotten-tomatoes.svg';

type SourceTypes =
  | 'imdb'
  | 'rotten';

interface RatingProps {
  source: SourceTypes,
  rating: string,
}

const Rating: React.FC<RatingProps> = ({ source, rating }: RatingProps) => {
  const logo = source === 'imdb' ? imdbLogo : rottingLogo;

  const renderRating = () => {
    if (source === 'imdb') {
      return (
        <Typography style={`${styles.imdbRatingContainer}`}>
          {`${rating}/10`}
        </Typography>
      );
    }

    return (
      <Typography style={`${styles.rottingRatingContainer}`}>
        {rating}
      </Typography>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles[source]}>
        <img src={logo} alt="source-logo" className={styles.logo} />
      </div>
      {renderRating()}
    </div>
  );
}

export default Rating;
