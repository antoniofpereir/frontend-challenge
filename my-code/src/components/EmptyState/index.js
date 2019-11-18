import React from 'react';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './EmptyState.module.css';
import emptyImg from '../../../resources/illustration-empty-state.png';

import { MESSAGES } from '../../language/en';

function EmptyState() {
  return (
    <div className={styles.container}>
      <img src={emptyImg} className={styles.emptyImg}/>
      <Typography variant="medium1">
        {MESSAGES.EMPTY_TITLE}
      </Typography>
      <Typography variant="regular1" color="secondary">
        {MESSAGES.EMPTY_BODY}
      </Typography>
    </div>
  );
}

export default EmptyState;
