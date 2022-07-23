import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ChannelInfo,
  Header,
  VideoActions,
  VideoPlayer,
  Comment,
  CommentForm,
  Spinner,
} from 'components';
import { Recommend } from 'components/cards';
import requests from 'constants/api';
import { getVideo } from 'helpers/file';
import styles from './watch.module.scss';
import { formatDate } from 'helpers/format';
import { usePaginate } from 'hooks/paginate';

export default function Video() {
  const [query, setQuery] = useSearchParams();
  const [video, setVideo] = useState();
  const videoId = query.get('v');

  const videoFile = getVideo(video?.file);

  const fetchVideo = async () => {
    const { data } = await requests.video.get(videoId);
    if (data?.success) {
      setVideo(data?.video);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [videoId]);
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <VideoPlayer src={videoFile} />
        <div className={styles.page}>
          <div className={styles.videoSide}>
            <VideoDetails {...video} />
            <VideoActions {...video} />
            <ChannelInfo {...video?.owner} />
            <div className={styles.comments}>
              <CommentForm type="comment" to={videoId} />
              <Comments videoId={videoId} />
            </div>
          </div>
          <Recommends />
        </div>
      </div>
    </div>
  );
}

const VideoDetails = ({ caption, title, tags, viewerCount, createdAt }) => {
  const date = formatDate(createdAt);
  return (
    <div className={styles.videoDetails}>
      <div className={styles.videoTags}>
        {tags?.map((t) => (
          <a href="">#{t}</a>
        ))}
      </div>
      <h1 className={styles.videoTitle}>{title}</h1>
      <div className={styles.videoInfo}>
        <span>{viewerCount} views</span>
        <span>{date}</span>
      </div>
      <p className={styles.videoCaption}>{caption}</p>
    </div>
  );
};

const Comments = ({ videoId }) => {
  const [page] = usePaginate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchComments = async () => {
    const query = {
      limit: 10,
      page,
      id: videoId,
    };
    setLoading(true);
    const { data } = await requests.video.comments(query);
    setLoading(false);
    if (data?.success) {
      setData((previous) => {
        if (!previous) return data?.data;
        return {
          ...data.data,
          result: [...previous.result, ...data?.data?.result],
        };
      });
    }
  };
  useEffect(() => {
    fetchComments();
  }, [page]);

  return (
    <ul className={styles.comments}>
      {data?.result?.map((comment) => (
        <li className={styles.comment}>
          <Comment {...comment} />
        </li>
      ))}
      <Spinner loading={loading} />
    </ul>
  );
};

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);

  const fetchRecommends = async () => {
    const params = {
      limit: 10,
      page: 1,
    };
    const { data } = await requests.video.recommend(params);
    if (data?.success) {
      setRecommends(data.data.result);
    }
  };
  useEffect(() => {
    fetchRecommends();
  }, []);
  return (
    <div className={styles.recommendSide}>
      {recommends?.map((r, key) => (
        <Recommend {...r} key={key} />
      ))}
    </div>
  );
};
