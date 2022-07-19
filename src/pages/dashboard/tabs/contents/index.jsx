import { Icon } from 'components';
import React from 'react';

import styles from './contents.module.scss';

export default function DashboardContentTab() {
  return (
    <div className={styles.container}>
      <h2>Channel Content</h2>
      <table>
        <th>Video</th>
        <th>Visibility</th>
        <th>Date</th>
        <th>Views</th>
        <th>Edit</th>

        <tr>
          <td>
            <Video />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
            <Icon icon="Delete" />
          </td>
        </tr>
        <tr>
          <td>
            <Video />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
            <Icon icon="Delete" />
          </td>
        </tr>
        <tr>
          <td>
            <Video />
          </td>
          <td>Private</td>
          <td>Dec 24, 2020</td>
          <td>900</td>
          <td>
            <Icon icon="Edit" />
            <Icon icon="Delete" />
          </td>
        </tr>
      </table>
    </div>
  );
}

const Video = () => {
  return (
    <div className={styles.content}>
      <img
        src="https://st2.myideasoft.com/idea/fo/10/myassets/products/813/71237789-680483449127860-5199516412451749888-n.jpg?revision=1580465975"
        alt=""
        className={styles.contentImage}
      />
      <div className={styles.contentInfo}>
        <h1>Sezen aksu kaybolan yıllar</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A velit qui
          architecto.
        </p>
      </div>
    </div>
  );
};
