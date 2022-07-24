import * as yup from 'yup';

const Schema = yup.object({
  name: yup.string().required('Please provide name'),
});

export default Schema;
