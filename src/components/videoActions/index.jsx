import React, { useEffect, useState } from 'react';
import styles from './action.module.scss';
import { Icon } from 'components';
import requests from 'constants/api';
export default function VideoActions(v) {
  const [video, setVideo] = useState(v);

  const handleAction = (type) => async () => {
    const params = {
      to: video?._id,
      model: 'Video',
      type,
    };
    const { data } = await requests.action.add(params);
    if (data?.success) {
      setVideo(data.result);
    }
  };
  useEffect(() => {
    setVideo(v);
  }, [v]);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Icon icon="Like" onClick={handleAction('Like')} />
          {video?.likeCount}
        </li>
        <li className={styles.listItem}>
          <Icon icon="Dislike" onClick={handleAction('Dislike')} />
          {video?.dislikeCount}
        </li>
        <li className={styles.listItem}>
          <Icon icon="Share" />
          Share
        </li>
        {/* <li className={styles.listItem}>
          <Icon icon="Save" />
          Save
        </li> */}
      </ul>
    </div>
  );
}
