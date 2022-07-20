import { Button } from 'components';
import {
  Form,
  FormControl,
  FormInput,
  FormLabel,
  FormTitle,
} from 'components/form';

import styles from './reset.module.scss';

export default function Reset() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form>
          <FormTitle>Reset your password</FormTitle>
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <FormInput placeholder="New password" />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <FormInput placeholder="Confirm password" />
          </FormControl>
          <Button variant="contained">Reset</Button>
        </Form>
      </div>
    </div>
  );
}
