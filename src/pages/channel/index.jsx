import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { colors } from 'constants/theme';
import { Avatar, Button, Header } from 'components';
import channelTabs from './tabs';
import requests from 'constants/api';
import { getProfile } from 'helpers/file';
import { formatNumber } from 'helpers/format';
import { useAuthorize } from '../../hooks/access';
import styles from './channel.module.scss';

export default function Channel() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Profile />
          <Tabs />
        </div>
        <Tab />
      </div>
    </>
  );
}

const Profile = () => {
  const id = useParams().channel;
  const [channel, setChannel] = useState();
  const navigate = useNavigate();
  const auth = useAuthorize(id);

  const fetchChannel = async () => {
    const { data } = await requests.channel.get(id);
    if (data?.success) {
      setChannel(data.channel);
    }
  };

  const handleSubscribe = async () => {
    const params = {
      to: id,
      action: 'subscribe',
      notifications: false,
    };
    const { data } = await requests.channel.subscribe(params);
    if (data?.success) {
      setChannel(data?.channel);
    }
  };

  const direct = (to) => () => navigate(`/dashboard/${to}`);

  useEffect(() => {
    fetchChannel();
  }, [id]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <Avatar src={getProfile(channel?.image)} size="72" />
          <div className={styles.profileDetails}>
            <h1>{channel?.name}</h1>
            <span>{formatNumber(channel?.subscribers)} subscribers</span>
          </div>
        </div>
        {auth ? (
          <div className={styles.profileActions}>
            <Button variant="contained" onClick={direct('videos')}>
              Manage Videos
            </Button>
            <Button variant="contained" onClick={direct('channel')}>
              Customize Channel
            </Button>
          </div>
        ) : (
          <div className={styles.profileActions}>
            <Button variant="danger" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const Tabs = () => {
  const { channel, tab } = useParams();
  const auth = useAuthorize(channel);

  const linkStyle = {
    true: {
      color: colors.color_secondary_200,
      borderColor: colors.color_secondary_400,
    },
    false: {},
  };
  return (
    <nav className={styles.tabNav}>
      <ul className={styles.tabList}>
        {channelTabs.map(
          (t) =>
            (!t.protected || (t.protected && auth)) && (
              <li className={styles.tabItem}>
                <Link
                  to={`/channel/${channel}/${t.tab}`}
                  style={linkStyle[tab === t.tab]}
                >
                  {t.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

const Tab = () => {
  const param = useParams().tab;
  const Component =
    channelTabs.find((t) => t.tab === param)?.component ||
    channelTabs[0].component;

  return <Component />;
};
