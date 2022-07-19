import React from 'react';

import styles from './home.module.scss';

import { Header, Nav, Sidebar } from 'components';
import { Content } from 'components/cards';

export default function Home() {
  return (
    <>
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
    </>
  );
}
