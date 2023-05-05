import classNames from 'classnames';
import './index.scss';

interface Props {
  type?: 'title' | 'paragraph';
  className?: string;
  children: string;
};

export function Text({ type = 'paragraph', children, className = '' }: Props) {
  return <div className={classNames({
    'text': true,
    'text-paragraph': type === 'paragraph',
    'text-title': type === 'title',
    [className]: !!className
  })}>{children}</div>;
}