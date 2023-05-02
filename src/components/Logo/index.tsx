import Image from 'next/image';
import styles from './index.module.scss';

export function Logo() {
  return <Image
    className={styles.logo}
    src="/logo.png"
    alt="Memo App Logo"
    width={240}
    height={240}
  />;
}