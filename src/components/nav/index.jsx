import React from 'react';
import styles from './nav.module.scss';
export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>All</span>
        </li>
        <li className={styles.item}>
          <span>Music</span>
        </li>
        <li className={styles.item}>
          <span>Comedy</span>
        </li>
        <li className={styles.item}>
          <span>Movie</span>
        </li>
      </ul>
    </nav>
  );
}
