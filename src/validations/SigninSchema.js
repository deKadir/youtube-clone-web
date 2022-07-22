import * as yup from 'yup';

const Schema = yup.object({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Email is required'),
  password: yup.string().min(5).required('Password is required field'),
});

export default Schema;
