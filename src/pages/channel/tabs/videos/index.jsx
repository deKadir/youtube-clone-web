import { Content } from 'components/cards';
import styles from './videos.module.scss';
export default function VideosTab() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Uploads</h4>
        <ul className={styles.videoList}>
          <li className={styles.videoItem}>
            <Content />
          </li>
          <li className={styles.videoItem}>
            <Content />
          </li>
          <li className={styles.videoItem}>
            <Content />
          </li>
        </ul>
      </div>
    </div>
  );
}
