import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './signin.module.scss';
import { Button, CustomLink } from 'components';
import { Form, FormInput, FormResponse } from 'components/form';
import requests from 'constants/api';
import { login } from 'redux/actions/user';
import SigninSchema from 'validations/SigninSchema';

const FORM = {
  email: '',
  password: '',
};
export default function Signin() {
  const [response, setResponse] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendRequest = async (values, { resetForm }) => {
    setResponse();
    try {
      const { data } = await requests.auth.login(values);
      if (data.token) {
        dispatch(login({ token: data.token }));
        resetForm();
        setTimeout(() => navigate('/'), 1000);
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
          validationSchema={SigninSchema}
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
            <Form title="Login">
              {inputs.map((input) => (
                <FormInput
                  {...input}
                  onChange={handleChange}
                  value={values[input.name]}
                  error={errors[input.name]}
                />
              ))}

              <CustomLink to="/signup">Don't have account?</CustomLink>
              <br />
              <CustomLink to="/forget">Forgot your password?</CustomLink>
              <FormResponse {...response} />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                Login
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
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email address',
    type: 'text',
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
    type: 'password',
  },
];
