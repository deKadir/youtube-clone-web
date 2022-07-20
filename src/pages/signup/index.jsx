import { Button, CustomLink } from 'components';
import {
  Form,
  FormControl,
  FormInput,
  FormLabel,
  FormTitle,
} from 'components/form';

import styles from './signup.module.scss';

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form>
          <FormTitle>Create account</FormTitle>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <FormInput placeholder="Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder="Password" type="password" />
          </FormControl>
          <FormControl>
            <FormLabel>Password Confirm</FormLabel>
            <FormInput placeholder="Password confirm" type="password" />
          </FormControl>
          <FormControl>
            <CustomLink to="/signin">Already have account?</CustomLink>
          </FormControl>
          <Button variant="contained"> Create Account</Button>
        </Form>
      </div>
    </div>
  );
}
