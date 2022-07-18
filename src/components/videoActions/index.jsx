import React from 'react';
import styles from './action.module.scss';
import { Icon } from 'components';
export default function VideoActions() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Icon icon="Like" />
          123
        </li>
        <li className={styles.listItem}>
          <Icon icon="Dislike" />
          12
        </li>
        <li className={styles.listItem}>
          <Icon icon="Share" />
          Share
        </li>
        <li className={styles.listItem}>
          <Icon icon="Save" />
          Save
        </li>
      </ul>
    </div>
  );
}
