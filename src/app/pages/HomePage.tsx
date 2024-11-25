import React from 'react';

import styles from './HomePage.module.css';

function HomePage(): React.ReactElement {
  return (
    <main className={styles.root}>
      <div className={styles['root-container']} />
    </main>
  );
}

export default HomePage;
