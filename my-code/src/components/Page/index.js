import React from 'react';
import PropTypes from 'prop-types';

/* styles */
import styles from './Page.module.css';
import logo from '../../../resources/logo.svg';

/* utils */
import history from '../../utils/history';

function Page({ children }) {
  const goToHomePage = () => history.push('/');

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={logo} alt="page-logo" className={styles.logo} onClick={goToHomePage} />
        {children}
      </div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
