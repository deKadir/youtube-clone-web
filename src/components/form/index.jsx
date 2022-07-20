import classNames from 'classnames';

import styles from './form.module.scss';

export const Form = (props) => {
  return (
    <form {...props} className={classNames(props.className, styles.form)} />
  );
};
export const FormTitle = (props) => {
  return (
    <h2 {...props} className={classNames(props.className, styles.formTitle)} />
  );
};
export const FormControl = (props) => {
  return (
    <div
      {...props}
      className={classNames(props.className, styles.formControl)}
    />
  );
};
export const FormInput = (props) => {
  return (
    <input
      {...props}
      className={classNames(props.className, styles.formInput)}
    />
  );
};

export const FormLabel = (props) => {
  return (
    <label
      {...props}
      className={classNames(props.className, styles.formLabel)}
    />
  );
};
