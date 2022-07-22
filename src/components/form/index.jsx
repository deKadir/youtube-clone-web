import classNames from 'classnames';

import styles from './form.module.scss';

export const Form = ({ title, children, ...props }) => {
  return (
    <form {...props} className={classNames(props.className, styles.form)}>
      <FormTitle>{title}</FormTitle>
      {children}
    </form>
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
export const FormLabel = (props) => {
  return (
    <label
      {...props}
      className={classNames(props.className, styles.formLabel)}
    />
  );
};
export const FormInput = ({ label, error, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <input
        {...props}
        className={classNames(props.className, styles.formInput)}
      />
      <ValidationMessage>{error}</ValidationMessage>
    </FormControl>
  );
};

const ValidationMessage = ({ children }) => {
  return <span className={styles.formValidationMessage}>{children}</span>;
};

export const FormResponse = ({ message, success }) => {
  const className = success ? styles.responseSuccess : styles.responseError;
  return (
    <FormControl>
      <span className={className}>{message}</span>
    </FormControl>
  );
};
