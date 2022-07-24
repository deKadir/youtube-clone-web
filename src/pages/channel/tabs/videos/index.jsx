import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePaginate } from 'hooks/paginate';
import { Content } from 'components/cards';
import requests from 'constants/api';
import styles from './videos.module.scss';

export default function VideosTab() {
  const channel = useParams().channel;
  const [videos, setVideos] = useState([]);
  const [page] = usePaginate();
  const fetchVideos = async () => {
    const params = {
      by: 'channel',
      page,
      limit: 12,
      channel,
    };
    const { data } = await requests.video.list(params);
    if (data?.success) {
      setVideos((v) => [...v, ...data.videos.result]);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Uploads</h4>
        <ul className={styles.videoList}>
          {videos?.map((video, key) => (
            <li className={styles.videoItem}>
              <Content {...video} key={key} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
