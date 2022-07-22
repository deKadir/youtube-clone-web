import { useState } from 'react';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

import styles from './reset.module.scss';
import { Button } from 'components';
import { Form, FormInput, FormResponse } from 'components/form';
import ResetSchema from 'validations/ResetSchema';
import requests from 'constants/api';

const FORM = {
  password: '',
  passwordConfirm: '',
};
export default function Reset() {
  const [response, setResponse] = useState();
  const [searchParam, setSearchparam] = useSearchParams();
  const sendRequest = async (values) => {
    try {
      const token = searchParam.get('token');
      const { data } = await requests.auth.reset({ token }, values);
      setResponse(data);
    } catch (error) {
      setResponse({ success: false, message: error.response.data.message });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Formik
          initialValues={FORM}
          validationSchema={ResetSchema}
          onSubmit={sendRequest}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
            dirty,
          }) => (
            <Form title="Reset your password">
              {inputs.map((input) => (
                <FormInput
                  {...input}
                  onChange={handleChange}
                  value={values[input.name]}
                  error={errors[input.name]}
                />
              ))}
              <FormResponse {...response} />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
const inputs = [
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
    type: 'password',
  },
  {
    label: 'Password Confirm',
    name: 'passwordConfirm',
    placeholder: 'Enter your password confirm',
    type: 'password',
  },
];
