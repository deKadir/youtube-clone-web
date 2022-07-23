import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SvgHeader, SvgMenu, SvgSearch } from 'assets/icons';
import { Avatar, Icon } from 'components';
import { getProfile } from 'helpers/file';
import styles from './header.module.scss';

export default function Header() {
  const user = useSelector((state) => state?.user?.info);
  const profile = getProfile(user?.image);
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <SvgMenu />
          <Link to="/">
            <SvgHeader />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className={styles.headerRight}>
          <Icon icon="Upload" />
          <Avatar src={profile} />
        </div>
      </div>
    </header>
  );
}

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search" />
      <button className={styles.searchButton} title="Search">
        <SvgSearch />
      </button>
    </div>
  );
};
