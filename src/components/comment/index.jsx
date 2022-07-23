import { Avatar, Button, CommentForm, Icon, Spinner } from 'components';
import requests from 'constants/api';
import { getProfile } from 'helpers/file';
import { elapsedTime } from 'helpers/format';
import { useEffect, useState } from 'react';

import styles from './comment.module.scss';
export default function Comment(comment) {
  return (
    <div className={styles.container}>
      <div className={styles.commentWrapper}>
        <CommentModel {...comment} />
      </div>
    </div>
  );
}

const CommentModel = (c) => {
  const [comment, setComment] = useState(c);
  const [formActive, setFormActive] = useState(false);
  const [reply, setReply] = useState({ view: false, replies: [] });
  const [loading, setLoading] = useState(false);

  const time = elapsedTime(comment?.createdAt);

  const handleForm = () => setFormActive(!formActive);

  const handleReplies = () => setReply({ ...reply, view: !reply.view });

  const fetchReplies = async () => {
    const params = {
      limit: 15,
      page: 1,
      id: comment?._id,
    };
    setLoading(true);
    const { data } = await requests.comment.replies(params);
    setLoading(false);
    if (!data?.success) return;
    setReply((prev) => {
      return { ...prev, replies: data?.data?.result };
    });
  };

  const handleAction = (type) => async () => {
    const params = {
      to: comment?._id,
      model: 'Comment',
      type,
    };

    const { data } = await requests.action.add(params);
    if (data?.success) {
      const { likeCount, dislikeCount } = data.result;
      setComment((p) => {
        return { ...p, likeCount, dislikeCount };
      });
    }
  };

  useEffect(() => {
    if (reply.view) {
      fetchReplies();
    }
  }, [reply.view]);

  useEffect(() => {
    setComment(c);
  }, []);
  return (
    <div className={styles.commentContainer}>
      <Avatar src={getProfile(comment?.owner?.image)} />
      <div className={styles.commentBody}>
        <div className={styles.commentInfo}>
          <p>{comment?.owner?.name}</p>
          <span>{time} ago</span>
        </div>
        <p className={styles.comment}>{comment?.caption}</p>
        <div className={styles.commentActions}>
          <button className={styles.actionButton}>
            <Icon icon="Like" onClick={handleAction('Like')} />
            {comment?.likeCount}
          </button>
          <button className={styles.actionButton}>
            <Icon icon="Dislike" onClick={handleAction('Dislike')} />
            {comment?.dislikeCount}
          </button>
          <Button className={styles.replyButton} onClick={handleForm}>
            Reply
          </Button>
        </div>
        {formActive && <CommentForm type="reply" to={comment?._id} />}
        <span className={styles.viewButton} onClick={handleReplies}>
          {reply.view ? '⇩' : '⇧'} View replies
        </span>
        <ul>
          {reply.view &&
            reply.replies.map((reply) => (
              <li>
                <ReplyModel {...reply} />
              </li>
            ))}
          <Spinner loading={loading} />
        </ul>
      </div>
    </div>
  );
};

const ReplyModel = (r) => {
  const [reply, setReply] = useState(r);

  const handleAction = (type) => async () => {
    const params = {
      to: reply?._id,
      model: 'Reply',
      type,
    };

    const { data } = await requests.action.add(params);
    if (data?.success) {
      const { likeCount, dislikeCount } = data.result;
      setReply((p) => {
        return { ...p, likeCount, dislikeCount };
      });
    }
  };

  useEffect(() => {
    setReply(r);
  }, []);
  const style = {
    marginTop: '6px',
  };
  return (
    <div className={styles.commentContainer} style={style}>
      <Avatar src={getProfile(reply?.owner?.image)} />
      <div className={styles.commentBody}>
        <div className={styles.commentInfo}>
          <p>{reply?.owner?.name}</p>
          <span>{elapsedTime(reply?.createdAt)} ago</span>
        </div>
        <p className={styles.comment}>{reply?.caption}</p>
        <div className={styles.commentActions}>
          <button className={styles.actionButton}>
            <Icon icon="Like" onClick={handleAction('Like')} />
            {reply?.likeCount}
          </button>
          <button className={styles.actionButton}>
            <Icon icon="Dislike" onClick={handleAction('Dislike')} />
            {reply?.dislikeCount}
          </button>
        </div>
      </div>
    </div>
  );
};
