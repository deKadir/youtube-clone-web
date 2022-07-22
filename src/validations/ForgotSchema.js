import * as yup from 'yup';

const Schema = yup.object({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Email is required'),
});

export default Schema;
