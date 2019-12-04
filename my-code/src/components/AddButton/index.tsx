import React from 'react';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './AddButton.module.css';
import iconHeartFull from '../../../resources/icon-heart-full.svg';
import iconHeartWhite from '../../../resources/icon-heart-white.svg';

interface AddButtonProps {
  text: string,
  handler: () => void,
  isFavourite: boolean,
}

const AddButton: React.FC<AddButtonProps> = ({ text, handler, isFavourite }: AddButtonProps) => {
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

export default AddButton;
