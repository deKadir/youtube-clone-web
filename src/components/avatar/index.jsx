import React from 'react';
import styles from './avatar.module.scss';
import classNames from 'classnames';
export default function Avatar({ src, size, className, ...props }) {
  return (
    <img
      {...props}
      src={src}
      width={`${size || 36}px`}
      height={`${size || 36}px`}
      className={classNames(className, styles.avatar)}
    />
  );
}
