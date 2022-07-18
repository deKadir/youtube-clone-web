import styles from './button.module.scss';
import classNames from 'classnames';

export default function Button(props) {
  return (
    <button
      {...props}
      className={classNames(props.className, styles[props?.variant || 'text'])}
    />
  );
}
