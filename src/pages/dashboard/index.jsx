import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dashboardTabs from './tabs';
import { colors } from 'constants/theme';
import { Avatar } from 'components';
import { getProfile } from 'helpers/file';
import styles from './dashboard.module.scss';

export default function Dashboard() {
  return (
    <section className={styles.container}>
      <Sidebar />
      <Tab />
    </section>
  );
}

const Sidebar = () => {
  const { tab } = useParams();
  const tabStyle = {
    true: {
      color: colors.color_acccent_200,
      borderLeftColor: colors.color_acccent_200,
      backgroundColor: colors.color_primary_600,
    },
    false: {},
  };
  return (
    <main className={styles.sidebarContainer}>
      <Profile />
      <div className={styles.sidebarTabs}>
        <ul className={styles.tabList}>
          {dashboardTabs.map((t) => (
            <li className={styles.listItem}>
              <Link to={`/dashboard/${t.tab}`} style={tabStyle[t.tab === tab]}>
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

const Profile = () => {
  const user = useSelector((state) => state?.user?.info);
  return (
    <section className={styles.sidebarProfile}>
      <Avatar size="128" src={getProfile(user?.image)} />
      <span>Your channel</span>
      <p>{user?.name}</p>
    </section>
  );
};

const Tab = () => {
  const param = useParams().tab;
  const TabComponent =
    dashboardTabs.find((t) => t.tab === param).component ||
    dashboardTabs[0].component;
  return <TabComponent />;
};
