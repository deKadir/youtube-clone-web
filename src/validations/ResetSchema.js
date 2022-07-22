import * as yup from 'yup';

const Schema = yup.object({
  password: yup.string().min(5).required('Password is required field'),
  passwordConfirm: yup
    .string()
    .min(5)
    .required('Password confirm is required field'),
});

export default Schema;
