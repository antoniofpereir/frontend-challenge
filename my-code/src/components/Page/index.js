import React from 'react';

import styles from './Page.module.css';

function Page({ children }) {
  return (
    <div className={styles.container}>
      What's in
      <div className={styles.innerContainer}>
        {children}
      </div>
    </div>
  );
}

export default Page;
