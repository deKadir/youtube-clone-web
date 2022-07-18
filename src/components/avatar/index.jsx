import React from 'react';
import styles from './avatar.module.scss';
import classNames from 'classnames';
export default function Avatar(props) {
  return (
    <img
      {...props}
      src={props.src}
      width={`${props.size || 36}px`}
      height={`${props.size || 36}px`}
      className={classNames(props.className, styles.avatar)}
    />
  );
}
