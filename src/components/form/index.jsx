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
export const FormInput = ({ label, error, info, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <input
        {...props}
        className={classNames(props.className, styles.formInput)}
      />
      <FormInfo message={info} />
      <ValidationMessage>{error}</ValidationMessage>
    </FormControl>
  );
};
export const FormTextarea = ({ label, error, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <textarea
        {...props}
        className={classNames(props.className, styles.formTextArea)}
      />
      <ValidationMessage>{error}</ValidationMessage>
    </FormControl>
  );
};

export const FileInput = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <FormLabel>{props.label}</FormLabel>
      <input
        {...props}
        type="file"
        className={classNames(props.className, styles.formFileInput)}
      />
    </div>
  );
};
export const FormCheckbox = ({ label, value, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <input
        {...props}
        checked={value}
        type="checkbox"
        className={classNames(props.className, styles.formCheckbox)}
      />
    </FormControl>
  );
};
export const FormSelect = ({ values = [], label, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <select {...props}>
        {values.map((v) => (
          <option value={v.value}>{v.name}</option>
        ))}
      </select>
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

const FormInfo = ({ message }) => {
  return <span className={styles.formInfo}>{message}</span>;
};
