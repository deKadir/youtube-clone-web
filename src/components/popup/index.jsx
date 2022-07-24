import React from 'react';
import styles from './popup.module.scss';
export default function Popup({ children, active, ...props }) {
  if (!active) return;
  return (
    <div className={styles.container}>
      <div className={styles.content} {...props}>
        {children}
      </div>
    </div>
  );
}
