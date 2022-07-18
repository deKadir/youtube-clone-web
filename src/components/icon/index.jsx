import React from 'react';
import * as icons from 'assets/icons';
import styles from './icon.module.scss';
import classNames from 'classnames';
export default function Icon(props) {
  const Svg = icons[`Svg${props.icon}`];
  return (
    <i {...props} className={classNames(props.className, styles.container)}>
      {<Svg />}
    </i>
  );
}
