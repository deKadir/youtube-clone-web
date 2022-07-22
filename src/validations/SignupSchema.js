import * as yup from 'yup';

const Schema = yup.object({
  name: yup.string().min(4).required('Channel name is required'),
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Email is required'),
  password: yup.string().min(5).required('Password is required field'),
  passwordConfirm: yup
    .string()
    .min(5)
    .required('Password confirm is required field'),
});

export default Schema;
