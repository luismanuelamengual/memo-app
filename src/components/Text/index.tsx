import classNames from 'classnames';
import styles from './index.module.scss';

interface Props {
  type?: 'title' | 'paragraph';
  children: string;
};

export function Text({ type = 'paragraph', children }: Props) {
  return <div className={classNames({
    [styles.text]: true,
    [styles.paragraph]: type === 'paragraph',
    [styles.title]: type === 'title'
  })}>{children}</div>;
}