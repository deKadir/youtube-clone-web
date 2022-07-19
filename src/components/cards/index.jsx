import { Link } from 'react-router-dom';
import styles from './cards.module.scss';

export function Content() {
  return (
    <Link className={styles.content} to="/watch">
      <Thumbnail />
      <div className={styles.contentInfoSide}>
        <div className={styles.contentImage}>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AKedOLTmeJoYYkGzyMymXox1FyO7UQICjLFYfOKIl61tmA=s88-c-k-c0x00ffffff-no-rj" />
        </div>
        <div className={styles.contentInfo}>
          <Title title="Sezen aksu firuze" />
          <Channel name="Sezen aksu" />
          <VideoDetails date="4 hours" views="42k" />
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

const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const Thumbnail = (src) => {
  return (
    <div className={styles.thumbnailContainer}>
      <img
        className={styles.videoThumbnail}
        src="https://st2.myideasoft.com/idea/fo/10/myassets/products/813/71237789-680483449127860-5199516412451749888-n.jpg?revision=1580465975"
        alt=""
      />
      <span className={styles.videoLength}>4:32</span>
    </div>
  );
};

const Channel = ({ name }) => {
  return (
    <Link to={'/'} className={styles.channelName}>
      {name}
    </Link>
  );
};
const ChannelImage = ({ src }) => {
  return (
    <Link to="/">
      <img src={src} className={styles.channelImage} />
    </Link>
  );
};

const VideoDetails = ({ date, views }) => {
  return (
    <span className={styles.videoDetails}>
      <span className={styles.views}>{`${views} views`} </span>
      <span className={styles.date}>{`${date} ago`}</span>
    </span>
  );
};
