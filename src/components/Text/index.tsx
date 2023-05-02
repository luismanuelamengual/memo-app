import classNames from 'classnames';
import './index.scss';

interface Props {
  type?: 'title' | 'paragraph';
  children: string;
};

export function Text({ type = 'paragraph', children }: Props) {
  return <div className={classNames({
    'text': true,
    'text-paragraph': type === 'paragraph',
    'text-title': type === 'title'
  })}>{children}</div>;
}