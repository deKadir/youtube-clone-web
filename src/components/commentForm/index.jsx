import React, { useState } from 'react';
import { Avatar, Button } from 'components';
import styles from './form.module.scss';
import { useSelector } from 'react-redux';
import { getProfile } from 'helpers/file';
import requests from 'constants/api';
export default function CommentForm({ type, to }) {
  const user = useSelector((state) => state?.user?.info);
  const profile = getProfile(user?.image);
  const [focus, setFocus] = useState(false);
  const [caption, setCaption] = useState('');
  const types = ['comment', 'reply'];

  const sendRequest = async () => {
    if (!types.includes(type) || !caption.length) return;
    const owner = type === 'comment' ? 'video' : 'comment';
    const body = {
      [owner]: to,
      caption,
    };
    const { data } = await requests[type].add(body);
    if (data?.success) {
      setCaption('');
      setFocus(false);
    }
  };

  return (
    <div className={styles.commentForm}>
      <Avatar size="40" src={profile} />
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder={`Add a ${type}...`}
          onFocus={() => setFocus(true)}
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
        {focus && (
          <div className={styles.formButtons}>
            <Button onClick={() => setFocus(false)}>Cancel</Button>
            <Button
              className={styles.btnComment}
              variant="contained"
              onClick={sendRequest}
            >
              {type}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
