import { Link } from 'react-router-dom';
import { getProfile, getVideo } from 'helpers/file';
import { elapsedTime, formatNumber, maxString } from 'helpers/format';
import styles from './cards.module.scss';

export function Content({ owner, title, ...content }) {
  return (
    <Link className={styles.content} to={`/watch?v=${content._id}`}>
      <Thumbnail {...content} />
      <div className={styles.contentInfoSide}>
        <div className={styles.contentImage}>
          <ChannelImage {...owner} />
        </div>
        <div className={styles.contentInfo}>
          <Title title={title} />
          <Channel {...owner} />
          <VideoDetails {...content} />
        </div>
      </div>
    </Link>
  );
}
export function Recommend() {
  return (
    <Link className={styles.recommend} to="/watch">
      <div className={styles.recommendThumbnail}>
        <Thumbnail />
      </div>
      <div className={styles.recommendInfoSide}>
        <div className={styles.recommendInfo}>
          <Title title="Sezen aksu firuze high quality full album" />
          <Channel name="Sezen aksu" />
          <VideoDetails date="4 hours" views="42k" />
        </div>
      </div>
    </Link>
  );
}

export function ResultCard() {
  return (
    <Link className={styles.result} to="/watch">
      <div className={styles.resultThumbnail}>
        <Thumbnail />
      </div>
      <div className={styles.resultInfoSide}>
        <div className={styles.resultInfo}>
          <Title title="Sezen aksu firuze high quality full album" />
          <VideoDetails date="4 hours" views="42k" />
          <div className={styles.resultChannelInfo}>
            <ChannelImage src="https://yt3.ggpht.com/ytc/AKedOLTmeJoYYkGzyMymXox1FyO7UQICjLFYfOKIl61tmA=s88-c-k-c0x00ffffff-no-rj" />
            <Channel name="Sezen aksu" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PlaylistCard() {
  return (
    <Link className={styles.playlist} to="/video">
      <img
        src="https://st2.myideasoft.com/idea/fo/10/myassets/products/813/71237789-680483449127860-5199516412451749888-n.jpg?revision=1580465975"
        alt=""
      />
      <div className={styles.playlistInfo}>
        <Title title="Sezen aksu firuze high quality full album" />
        <Channel name="Sezen aksu" />
      </div>
    </Link>
  );
}
const Title = ({ title }) => {
  return <h1 className={styles.title}>{maxString(title, 70)}</h1>;
};

const Thumbnail = ({ thumbnail, title }) => {
  return (
    <div className={styles.thumbnailContainer}>
      <img
        className={styles.videoThumbnail}
        src={getVideo(thumbnail)}
        alt={title}
      />
      <span className={styles.videoLength}>4:32</span>
    </div>
  );
};

const Channel = ({ name, _id }) => {
  return (
    <Link to={`/channel/${_id}/videos`} className={styles.channelName}>
      {name}
    </Link>
  );
};
const ChannelImage = ({ _id, image, name }) => {
  return (
    <Link to={`/channel/${_id}/videos`}>
      <img src={getProfile(image)} className={styles.channelImage} alt={name} />
    </Link>
  );
};

const VideoDetails = ({ createdAt, viewerCount }) => {
  return (
    <span className={styles.videoDetails}>
      <span className={styles.views}>
        {`${formatNumber(viewerCount)} views`}{' '}
      </span>
      <span className={styles.date}>{`${elapsedTime(createdAt)} ago`}</span>
    </span>
  );
};
