import { Container, Logo, Text } from 'components';
import styles from './index.module.scss';

export default function Page() {
  return (
    <Container className={styles.page}>
      <Logo />
      <Text type='title'>Memo Test App</Text>
    </Container>
  );
}