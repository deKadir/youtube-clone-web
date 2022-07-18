import { Avatar, Button, Icon } from 'components';
import styles from './channel.module.scss';

export default function ChannelInfo() {
  return (
    <div className={styles.container}>
      <Avatar
        size="36"
        src="https://yt3.ggpht.com/ytc/AKedOLTmeJoYYkGzyMymXox1FyO7UQICjLFYfOKIl61tmA=s48-c-k-c0x00ffffff-no-rj-mo"
      />
      <div className={styles.info}>
        <a href="#">Sezen Aksu</a>
        <p>2.25m Subscribers</p>
      </div>
      <div className={styles.actions}>
        <Button className={styles.subscribe} variant="danger">
          Subscribe
        </Button>
        <Icon icon="Notification" />
      </div>
    </div>
  );
}
