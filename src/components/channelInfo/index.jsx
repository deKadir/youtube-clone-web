import { Avatar, Button, Icon } from 'components';
import requests from 'constants/api';
import { getProfile } from 'helpers/file';
import { formatNumber } from 'helpers/format';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './channel.module.scss';

export default function ChannelInfo(c) {
  const [channel, setChannel] = useState({ ...c });
  const profile = getProfile(channel?.image);
  const subCount = formatNumber(channel?.subscribers);
  const subscribe = async () => {
    const params = {
      to: channel?._id,
      action: 'subscribe',
      notifications: false,
    };
    const { data } = await requests.channel.subscribe(params);
    if (data?.channel) {
      setChannel({ ...data.channel });
    }
  };

  useEffect(() => {
    setChannel(c);
  }, [c]);
  return (
    <div className={styles.container}>
      <Avatar size="36" src={profile} />
      <div className={styles.info}>
        <Link to={`/channel/${channel?._id}/videos`}>{channel?.name}</Link>
        <p>{subCount} Subscribers</p>
      </div>
      <div className={styles.actions}>
        <Button
          className={styles.subscribe}
          variant="danger"
          onClick={subscribe}
        >
          Subscribe
        </Button>
        <Icon icon="Notification" />
      </div>
    </div>
  );
}
