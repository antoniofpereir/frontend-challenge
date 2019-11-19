import React from 'react';
import PropTypes from 'prop-types';

/* styles */
import styles from './Typography.module.css';

const variants = [
  'bold1',
  'medium1',
  'medium2',
  'regular1',
];

const colors = [
  'default',
  'secondary',
  'active',
  'negative',
  'highlight',
  'disabled',
];

function Typography({
  children, variant, color, style,
}) {
  return (
    <div className={`${styles[variant]} ${styles[color]} ${style}`}>
      {children}
    </div>
  );
}

Typography.defaultProps = {
  variant: 'regular1',
  color: 'default',
  style: '',
};

Typography.propTypes = {
  variant: PropTypes.oneOf(variants),
  color: PropTypes.oneOf(colors),
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Typography;
