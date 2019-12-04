import React from 'react';

/* styles */
import styles from './Page.module.css';
import logo from '../../../resources/logo.svg';

/* utils */
import history from '../../utils/history';

interface PageProps {
  children: React.ReactNode,
}

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
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

export default Page;
