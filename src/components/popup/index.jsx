import { Icon } from 'components';
import React, { useEffect, useState } from 'react';
import styles from './popup.module.scss';
export default function Popup({ children, active, handleActive, ...props }) {
  if (!active) return;
  return (
    <div className={styles.container}>
      <div className={styles.content} {...props}>
        <Icon
          className={styles.closeBtn}
          icon="Close"
          onClick={() => handleActive(false)}
        />
        {children}
      </div>
    </div>
  );
}
