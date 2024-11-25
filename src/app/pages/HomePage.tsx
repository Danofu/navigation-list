import React from 'react';

import styles from './HomePage.module.css';

function HomePage(): React.ReactElement | null {
  return (
    <main className={styles.root}>
      <div className={styles.rootContainer} />
    </main>
  );
}

export default HomePage;
