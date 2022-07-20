import { Button, CustomLink } from 'components';
import { Form, FormControl, FormInput, FormLabel } from 'components/form';

import styles from './signin.module.scss';

export default function Signin() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder="Password" type="password" />
          </FormControl>
          <FormControl>
            <CustomLink to="/signup">Don't have account?</CustomLink>
            <CustomLink to="/forget">Forgot your password?</CustomLink>
          </FormControl>
          <Button variant="contained"> Create Account</Button>
        </Form>
      </div>
    </div>
  );
}
