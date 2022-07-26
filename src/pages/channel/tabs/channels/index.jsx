import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'components';
import { usePaginate } from 'hooks/paginate';
import requests from 'constants/api';
import { formatNumber } from 'helpers/format';
import { getProfile } from 'helpers/file';
import styles from './channels.module.scss';

export default function ChannelsTab() {
  const [channels, setChannels] = useState([]);
  const [page] = usePaginate();
  const fetchChannels = async () => {
    const params = {
      page,
      limit: 12,
    };
    const { data } = await requests.channel.subscriptions(params);
    if (data?.success) {
      setChannels((p) => [...p, ...data.data.result]);
    }
  };
  useEffect(() => {
    fetchChannels();
  }, [page]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Subscriptions</h4>
        <ul className={styles.list}>
          {channels.map((channel, key) => (
            <li className={styles.listItem}>
              <Subscription {...channel.to} key={key} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Subscription = ({ name, subscribers, image, _id }) => {
  return (
    <div className={styles.subscription}>
      <Link to={`/channel/${_id}/videos`}>
        <Avatar src={getProfile(image)} size="128" />
        <h1>{name}</h1>
        <span>{formatNumber(subscribers)} subscribers</span>
      </Link>
      {/* <Button variant="secondary">Subscribed</Button> */}
    </div>
  );
};
