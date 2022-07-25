import * as yup from 'yup';

const EditVideoSchema = yup.object({
  title: yup.string().required('Please provide title'),
  caption: yup.string().required('Please provide caption'),
});
const UploadVideoSchema = yup.object({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Email is required'),
});

export { EditVideoSchema, UploadVideoSchema };
