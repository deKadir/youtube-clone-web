import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'components';
import requests from 'constants/api';
import { getVideo } from 'helpers/file';
import { maxString } from 'helpers/format';
import Popup from 'components/popup';
import styles from './contents.module.scss';
import { Checkbox, Form, FormInput, FormTextarea } from 'components/form';

export default function DashboardVideosTab() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const fetchVideos = async () => {
    const params = {
      page,
      limit: 4,
    };
    const { data } = await requests.video.myVideos(params);
    if (data?.success) {
      setVideos(data?.data?.result);
    }
  };

  const handlePage = (action) => () =>
    setPage(action === 'next' ? page + 1 : page - 1 >= 1 ? page - 1 : 1);

  useEffect(() => {
    fetchVideos();
  }, [page]);

  return (
    <div className={styles.container}>
      <h2>Channel Content</h2>
      <div>
        {videos?.map((video, key) => (
          <Video {...video} key={key} />
        ))}
      </div>
      <div className={styles.paginate}>
        <button onClick={handlePage('previous')}>←</button>
        <button onClick={handlePage('next')}>→</button>
      </div>
    </div>
  );
}

const Video = (video) => {
  const editVideo = () => {};
  const deleteVideo = () => {};
  return (
    <div className={styles.content}>
      <a
        className={styles.contentBody}
        href={`/watch?v=${video._id}`}
        target="_blank"
      >
        <img
          src={getVideo(video.thumbnail)}
          alt={video.title}
          className={styles.contentImage}
        />
        <div className={styles.contentInfo}>
          <h1>{video.title}</h1>
          <p>{maxString(video.caption, 100)}</p>
          <span>{`Visibility: ${!video.private ? 'public' : 'private'}`}</span>
        </div>
      </a>
      <div className={styles.videoActions}>
        <Icon icon="Edit" onClick={editVideo} />
        <Icon icon="Delete" onClick={deleteVideo} />
        {/* <VideoPopup active={true} /> */}
      </div>
    </div>
  );
};

// const VideoPopup = ({ active }) => {
//   return (
//     <Popup active={active}>
//       <Form>
//         <FormInput label="Title" />
//         <FormTextarea label="Caption" />
//         <Button variant="contained">Edit</Button>
//         <Checkbox />
//       </Form>
//     </Popup>
//   );
// };
