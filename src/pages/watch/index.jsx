import {
  ChannelInfo,
  Header,
  VideoActions,
  VideoPlayer,
  Comment,
  CommentForm,
} from 'components';
import { Recommend } from 'components/cards';
import styles from './watch.module.scss';
export default function Video() {
  return (
    <div className={styles.container}>
      <div className={styles.fixedContent}>
        <Header />
      </div>
      <div className={styles.pageContainer}>
        <VideoPlayer />
        <div className={styles.page}>
          <div className={styles.videoSide}>
            <div className={styles.videoDetails}>
              <div className={styles.videoTags}>
                <a href="">#sezenaksu</a>
                <a href="">#turkcepop</a>
                <a href="">#minikserce</a>
              </div>
              <h1 className={styles.videoTitle}>
                Sezen Aksu | Kaybolan Yıllar
              </h1>
              <div className={styles.videoInfo}>
                <span>100 views</span>
                <span>Dec 16, 2020</span>
              </div>
              <p className={styles.videoCaption}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                maiores quam et corrupti hic ea expedita ab molestias quaerat
                labore ex voluptas, non recusandae distinctio ut nostrum culpa
                cupiditate modi!
              </p>
            </div>
            <VideoActions />
            <ChannelInfo />
            <div className={styles.comments}>
              <CommentForm />
              <ul className={styles.comments}>
                <li className={styles.comment}>
                  <Comment />
                </li>
                <li className={styles.comment}>
                  <Comment />
                </li>
                <li className={styles.comment}>
                  <Comment />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.recommendSide}>
            <Recommend />
            <Recommend />
            <Recommend />
          </div>
        </div>
      </div>
    </div>
  );
}
