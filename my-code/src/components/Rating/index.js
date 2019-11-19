import React from 'react';
import PropTypes from 'prop-types';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './Rating.module.css';
import imdbLogo from '../../../resources/logo-imdb.svg';
import rottingLogo from '../../../resources/logo-rotten-tomatoes.svg';

function Rating({ source, rating }) {
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

Rating.propTypes = {
  source: PropTypes.oneOf(['imdb', 'rotten']).isRequired,
  rating: PropTypes.string.isRequired,
};

export default Rating;
