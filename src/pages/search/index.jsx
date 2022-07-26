import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, Header, Icon } from 'components';
import { ResultCard } from 'components/cards';
import requests from 'constants/api';
import styles from './search.module.scss';
import { usePaginate } from 'hooks/paginate';

export default function Search() {
  const params = useSearchParams()[0];
  const [page, setPage] = usePaginate();
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState(false);

  const getResults = async () => {
    let query = {
      limit: 5,
      page,
    };
    for (const [key, value] of params.entries()) {
      query = { ...query, [key]: value };
    }
    const { data } = await requests.video.search(query);
    if (query.page === 1) {
      setResult([]);
    }
    if (data?.success) {
      setResult((p) => [...p, ...data.data.result]);
    }
  };

  useEffect(() => {
    getResults();
  }, [params, page]);

  useEffect(() => {
    setPage(1);
  }, [params]);
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.filterSide}>
          <Button
            className={styles.filterHeader}
            onClick={() => setFilter(!filter)}
          >
            <Icon icon="Filter" />
            <span>Filter</span>
          </Button>
          {filter && <Filter setActive={setFilter} />}
        </div>
        <ul className={styles.results}>
          {result?.map((r) => (
            <li className={styles.result}>
              <ResultCard {...r} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const Filter = ({ setActive }) => {
  return (
    <div className={styles.filterOptions}>
      {filterOptions.map(({ title, options, query }) => (
        <div className={styles.option}>
          <h4>{title}</h4>
          {options.map((option) => (
            <Option {...option} setActive={setActive} query={query} />
          ))}
        </div>
      ))}
    </div>
  );
};

const Option = ({ title, query, date, listBy, order, setActive }) => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    if (query === 'date') {
      params.delete('date');
      params.set('date', date);
      setParams(params);
    }
    if (query === 'sort') {
      params.delete('listBy');
      params.delete('order');
      params.set('listBy', listBy);
      params.set('order', order);
      setParams(params);
    }
    setActive(false);
  };

  return <span onClick={handleClick}>{title}</span>;
};

const filterOptions = [
  {
    title: 'Upload Date',
    query: 'date',
    options: [
      {
        title: 'last hour',
        date: new Date().getTime() - 3600 * 1000,
      },
      {
        title: 'today',
        date: new Date().getTime() - 3600 * 24 * 1000,
      },
      {
        title: 'this week',
        date: new Date().getTime() - 3600 * 24 * 7 * 1000,
      },
      {
        title: 'this month',
        date: new Date().getTime() - 3600 * 24 * 30 * 1000,
      },
    ],
  },
  {
    title: 'Sort By',
    query: 'sort',
    options: [
      {
        title: 'upload date',
        listBy: 'createdAt',
        order: 'descending',
      },
      {
        title: 'view count',
        listBy: 'viewerCount',
        order: 'descending',
      },
      {
        title: 'rating',
        listBy: 'likeCount',
        order: 'descending',
      },
    ],
  },
];
