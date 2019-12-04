import React from 'react';
import PropTypes from 'prop-types';

/* components */
import Typography from '../Typography';

/* styles */
import styles from './Card.module.css';

interface CardProps {
  title: string,
  body: string | React.ReactNode,
}

const Card: React.FC<CardProps> = ({ title, body }: CardProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="regular1" color="secondary" style={`${styles.title}`}>
        {title}
      </Typography>
      {typeof body === 'string'
        ? <Typography variant="regular1">{body}</Typography>
        : body}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Card;
