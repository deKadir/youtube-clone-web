import { Avatar, Button } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './channels.module.scss';
export default function ChannelsTab() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Subscriptions</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Subscription />
          </li>
          <li className={styles.listItem}>
            <Subscription />
          </li>
          <li className={styles.listItem}>
            <Subscription />
          </li>
          <li className={styles.listItem}>
            <Subscription />
          </li>
          <li className={styles.listItem}>
            <Subscription />
          </li>
          <li className={styles.listItem}>
            <Subscription />
          </li>
        </ul>
      </div>
    </div>
  );
}

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <Link to="/">
        <Avatar
          src="https://yt3.ggpht.com/ytc/AKedOLTi3M4kJiu2LO3yOea4ZVHQkOenTr8dhni4VliMLg=s176-c-k-c0x00ffffff-no-rj-mo"
          size="128"
        />
        <h1>Code cube</h1>
        <span>13.5k subscribers</span>
      </Link>
      <Button variant="secondary">Subscribed</Button>
    </div>
  );
};
