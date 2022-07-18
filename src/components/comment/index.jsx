import { Avatar, Button, CommentForm, Icon } from 'components';

import styles from './comment.module.scss';
export default function Comment() {
  return (
    <div className={styles.container}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/83883656?v=4"
        size="40"
      />
      <div className={styles.commentSide}>
        <div className={styles.commentInfo}>
          <p>Kadir develioglu</p>
          <span>7 months ago</span>
        </div>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eligendi possimus perspiciatis ratione esse debitis? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quis magnam sed quidem. sit
        </p>
        <div className={styles.commentActions}>
          <button className={styles.actionButton}>
            <Icon icon="Like" />
            15
          </button>
          <button className={styles.actionButton}>
            <Icon icon="Dislike" />5
          </button>
          <Button className={styles.replyButton}>Reply</Button>
        </div>
        {/* <CommentForm /> */}
        <span className={styles.viewButton}>View replies</span>
      </div>
    </div>
  );
}
