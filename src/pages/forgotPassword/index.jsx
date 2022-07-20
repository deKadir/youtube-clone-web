import { Button } from 'components';
import {
  Form,
  FormControl,
  FormInput,
  FormLabel,
  FormTitle,
} from 'components/form';
import styles from './forgot.module.scss';

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form>
          <FormTitle>Send email</FormTitle>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address" />
          </FormControl>
          <Button variant="contained">Send</Button>
        </Form>
      </div>
    </div>
  );
}
