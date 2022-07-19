import React from 'react';

import styles from './search.module.scss';

import { Button, Header, Icon } from 'components';
import { ResultCard } from 'components/cards';
export default function Search() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.filterOptions}>
          <Button className={styles.filterHeader}>
            <Icon icon="Filter" />
            <span>Filter</span>
          </Button>
          {/* <div className={styles.filterCatalog}>
            <div className={styles.catalog}>
              <h4>Upload Date</h4>
              <span>last hour</span>
              <span>today</span>
              <span>this week</span>
              <span>this month</span>
              <span>this year</span>
            </div>
            <div className={styles.catalog}>
              <h4>Duration</h4>
              <span>under 4 minutes</span>
              <span>4-20 minutes</span>
              <span>over 20 minutes</span>
            </div>
            <div className={styles.catalog}>
              <h4>Sort By</h4>
              <span>upload date</span>
              <span>view count</span>
              <span>rating</span>
            </div>
          </div> */}
        </div>
        <ul className={styles.results}>
          <li className={styles.result}>
            <ResultCard />
          </li>
          <li className={styles.result}>
            <ResultCard />
          </li>
          <li className={styles.result}>
            <ResultCard />
          </li>
        </ul>
      </div>
    </div>
  );
}
