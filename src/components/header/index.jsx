import { SvgHeader, SvgMenu, SvgSearch } from 'assets/icons';
import { Avatar, Icon } from 'components';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export default function Header() {
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
          <Avatar src="https://avatars.githubusercontent.com/u/83883656?v=4" />
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
