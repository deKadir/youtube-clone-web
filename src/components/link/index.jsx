import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './link.module.scss';

export const CustomLink = (props) => {
  return (
    <Link {...props} className={classNames(props.className, styles.link)} />
  );
};
