import React from 'react';
import PropTypes from 'prop-types';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './AddButton.module.css';
import iconHeartFull from '../../../resources/icon-heart-full.svg';
import iconHeartWhite from '../../../resources/icon-heart-white.svg';

function AddButton({ text, handler, isFavourite }) {
  const iconHeart = isFavourite ? iconHeartFull : iconHeartWhite;
  return (
    <div className={styles.container} role="button" tabIndex={0} onClick={handler}>
      <img
        src={iconHeart}
        alt="heart"
        className={styles.heart}
      />
      <Typography variant="regular1" color="secondary">
        {text}
      </Typography>
    </div>
  );
}

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired,
};

export default AddButton;
