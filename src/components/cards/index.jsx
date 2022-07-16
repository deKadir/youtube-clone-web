import { Link } from 'react-router-dom';
import styles from './cards.module.scss';

export function Content() {
  return (
    <a className={styles.content} href="#">
      <Thumbnail />
      <div className={styles.contentInfo}>
        <div className={styles.imageSection}>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AKedOLTmeJoYYkGzyMymXox1FyO7UQICjLFYfOKIl61tmA=s88-c-k-c0x00ffffff-no-rj" />
        </div>
        <div className={styles.infoSection}>
          <Title title="Sezen aksu firuze" />
          <Channel name="Sezen aksu" />
          <VideoDetails date="4 hours" views="42k" />
        </div>
      </div>
    </a>
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
const ChannelImage = ({ src, direct }) => {
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
