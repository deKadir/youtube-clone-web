import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import styles from './playlists.module.scss';

export default function DashboardChannelTab() {
  return (
    <div className={styles.container}>
      <h2>Channel Playlists</h2>
      <table>
        <th>Playlist</th>
        <th>Visibility</th>
        <th>Date</th>
        <th>Views</th>
        <th>Edit</th>

        <tr>
          <td>
            <Playlist />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
          </td>
        </tr>
        <tr>
          <td>
            <Playlist />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
          </td>
        </tr>
        <tr>
          <td>
            <Playlist />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
          </td>
        </tr>
      </table>
    </div>
  );
}

const Playlist = () => {
  return (
    <Link className={styles.content} to="/playlist">
      <img
        src="https://st2.myideasoft.com/idea/fo/10/myassets/products/813/71237789-680483449127860-5199516412451749888-n.jpg?revision=1580465975"
        alt=""
        className={styles.contentImage}
      />
      <div className={styles.contentInfo}>
        <h1>sezenaksu</h1>
      </div>
    </Link>
  );
};
