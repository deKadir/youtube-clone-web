import React, { useEffect, useState } from 'react';

import { Header, Nav, Sidebar, Spinner } from 'components';
import { Content } from 'components/cards';
import requests from 'constants/api';
import styles from './home.module.scss';
import { usePaginate } from 'hooks/paginate';

export default function Home() {
  const [data, setData] = useState();
  const [page] = usePaginate();
  const [loading, setLoading] = useState(true);
  const getVideos = async () => {
    const params = {
      limit: 12,
      page,
    };

    setLoading(true);
    const { data: fetchData } = await requests.video.recommend(params);
    setLoading(false);

    if (!fetchData?.success) return;

    setData((previous) => {
      if (!previous) return fetchData.data;
      return {
        ...fetchData.data,
        result: [...previous?.result, ...fetchData?.data?.result],
      };
    });
  };

  useEffect(() => {
    getVideos();
  }, [page]);

  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <Nav />
      <ul className={styles.contents}>
        {data?.result?.map((video) => (
          <li className={styles.content}>
            <Content {...video} />
          </li>
        ))}
        <Spinner loading={loading} />
      </ul>
    </>
  );
}
