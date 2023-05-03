import classNames from 'classnames';
import { ReactNode } from 'react';
import './index.scss';

interface Props {
  children: ReactNode;
  className?: string;
};

export function Column({ children, className = '' }: Props) {
  return <div className={classNames({
    'column': true,
    [className]: !!className
  })}>{children}</div>;
}