import React from 'react';
import { Header, Nav, Sidebar } from 'components';
import { Content } from 'components/cards';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Header />
      <Nav />
      <ul className={styles.contents}>
        <li className={styles.content}>
          <Content />
        </li>
        <li className={styles.content}>
          <Content />
        </li>
        <li className={styles.content}>
          <Content />
        </li>
        <li className={styles.content}>
          <Content />
        </li>
        <li className={styles.content}>
          <Content />
        </li>
        <li className={styles.content}>
          <Content />
        </li>
      </ul>
    </div>
  );
}
