import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import styles from './signup.module.scss';
import { Button, CustomLink } from 'components';
import { Form, FormInput, FormResponse } from 'components/form';
import requests from 'constants/api';
import { register } from 'redux/actions/user';
import SignupSchema from 'validations/SignupSchema';

const FORM = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
export default function Signup() {
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendRequest = async (values, { resetForm }) => {
    setResponse();
    try {
      const res = await requests.auth.register(values);
      setResponse(res.data);
      if (res.data.token) {
        dispatch(register({ token: res.data.token }));
        resetForm();
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message.toString(),
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Formik
          validationSchema={SignupSchema}
          initialValues={FORM}
          onSubmit={sendRequest}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            dirty,
            isSubmitting,
          }) => (
            <Form title="Create account">
              {inputs.map((input) => (
                <FormInput
                  {...input}
                  onChange={handleChange}
                  value={values[input.name]}
                  error={errors[input.name]}
                />
              ))}
              <CustomLink to="/signin">Already have account?</CustomLink>
              <FormResponse {...response} />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                Create Account
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
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
    type: 'text',
  },
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
  {
    label: 'Password Confirm',
    name: 'passwordConfirm',
    placeholder: 'Enter your password confirm',
    type: 'password',
  },
];
