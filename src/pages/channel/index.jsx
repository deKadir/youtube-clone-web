import React from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './channel.module.scss';

import { Avatar, Button, Header } from 'components';
import channelTabs from './tabs';
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
  return (
    <div className={styles.profile}>
      <div className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/83883656?v=4"
            size="72"
          />
          <div className={styles.profileDetails}>
            <h1>kadir</h1>
            <span>1k subscribers</span>
          </div>
        </div>
        <div className={styles.profileActions}>
          <Button variant="contained">Customize Channel</Button>
          <Button variant="contained">Manage Videos</Button>
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  return (
    <nav className={styles.tabNav}>
      <ul className={styles.tabList}>
        <li className={styles.tabItem}>
          <Link to="/channel/videos">Videos</Link>
        </li>
        <li className={styles.tabItem}>
          <Link to="/channel/playlists">Playlists</Link>
        </li>
        <li className={styles.tabItem}>
          <Link to="/channel/channels">Channels</Link>
        </li>
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
