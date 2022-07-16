import React from 'react';
import styles from './sidebar.module.scss';
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul>
          <li>Home</li>
          <li>Trends</li>
          <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  );
}
