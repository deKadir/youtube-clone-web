import React from 'react';
import { Avatar, Button } from 'components';
import styles from './form.module.scss';
export default function CommentForm() {
  return (
    <div className={styles.commentForm}>
      <Avatar
        size="40"
        src="https://avatars.githubusercontent.com/u/83883656?v=4"
      />
      <div className={styles.formContainer}>
        <input type="text" placeholder="Add a comment..." />
        <div className={styles.formButtons}>
          <Button>Cancel</Button>
          <Button className={styles.btnComment} variant="contained">
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
