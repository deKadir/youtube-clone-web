import styles from './playlists.module.scss';
import { Link } from 'react-router-dom';
export default function PlaylistsTab() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Created playlists</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Playlist />
          </li>
          <li className={styles.listItem}>
            <Playlist />
          </li>
          <li className={styles.listItem}>
            <Playlist />
          </li>
        </ul>
      </div>
    </div>
  );
}

const Playlist = () => {
  return (
    <div className={styles.playlistContainer}>
      <Link to="/">
        <img
          src="https://wikiimg.tojsiabtv.com/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg"
          alt=""
          className={styles.playlistThumbnail}
        />
        <h1>Liked videos</h1>
      </Link>
      <span>View full playlist</span>
    </div>
  );
};
