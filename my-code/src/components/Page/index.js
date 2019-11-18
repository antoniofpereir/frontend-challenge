import React from 'react';

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
      <img src={logo} className={styles.logo} onClick={goToHomePage} />
        {children}
      </div>
    </div>
  );
}

export default Page;
