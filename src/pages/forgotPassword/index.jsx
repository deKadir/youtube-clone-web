import { useState } from 'react';
import { Formik } from 'formik';

import styles from './forgot.module.scss';
import { Button } from 'components';
import { Form, FormInput, FormResponse } from 'components/form';
import requests from 'constants/api';
import ForgotSchmea from 'validations/ForgotSchema';

const FORM = {
  email: '',
};
export default function ForgotPassword() {
  const [response, setResponse] = useState();

  const sendRequest = async (values, { resetForm }) => {
    setResponse();
    try {
      const {
        data: { success, message },
      } = await requests.auth.forgotPassword(values);
      setResponse({ success, message });
      if (success) {
        resetForm();
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Formik
          initialValues={FORM}
          validationSchema={ForgotSchmea}
          onSubmit={sendRequest}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            dirty,
            isSubmitting,
          }) => (
            <Form title="Reset password">
              <FormInput
                label="Email"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
              />
              <FormResponse {...response} />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
