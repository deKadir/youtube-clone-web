import React, { useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'components';
import requests from 'constants/api';
import { getVideo } from 'helpers/file';
import { maxString } from 'helpers/format';
import Popup from 'components/popup';
import { Form, FormCheckbox, FormInput, FormTextarea } from 'components/form';
import { Formik } from 'formik';
import { EditVideoSchema } from 'validations/VideoSchema';
import styles from './contents.module.scss';

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
  const [edit, setEdit] = useState(false);
  const [del, setDelete] = useState(false);
  const editVideo = () => setEdit(true);
  return (
    <article className={styles.content}>
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
        <Icon icon="Delete" onClick={() => setDelete(true)} />
        <VideoPopup active={edit} setActive={setEdit} video={video} />
        <DeleteModal active={del} setActive={setDelete} video={video} />
      </div>
    </article>
  );
};

const VideoPopup = ({ active, setActive, video }) => {
  const { _id, title, caption, category, private: status } = video;
  const FORM = { title, caption, private: status, category };

  const sendRequest = async (values) => {
    const { data } = await requests.video.edit(_id, values);
    if (data?.success) {
      window.location.reload();
    }
  };
  return (
    <Popup active={active} handleActive={setActive}>
      <Formik
        initialValues={FORM}
        validationSchema={EditVideoSchema}
        onSubmit={sendRequest}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Form className={styles.videoPopupForm} onSubmit={handleSubmit}>
            {inputs.map(({ Component, ...props }) => (
              <Component
                {...props}
                value={values[props.name]}
                onChange={handleChange}
                error={errors[props.name]}
              />
            ))}
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Edit
            </Button>
          </Form>
        )}
      </Formik>
    </Popup>
  );
};

const DeleteModal = ({ active, setActive, video }) => {
  const { title, _id } = video;
  const onAccept = async () => {
    const { data } = await requests.video.delete(_id);
    if (data?.success) {
      setTimeout(() => window.location.reload(), 1000);
    }
  };
  const onCancel = () => setActive(false);

  return (
    <Modal
      active={active}
      handleActive={setActive}
      title="Delete video ?"
      body={maxString(title, 40)}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

const inputs = [
  {
    name: 'title',
    Component: FormInput,
    label: 'Title',
  },
  {
    name: 'caption',
    Component: FormTextarea,
    label: 'Caption',
    style: { height: '200px' },
  },
  {
    name: 'private',
    Component: FormCheckbox,
    label: 'Private',
  },
];
