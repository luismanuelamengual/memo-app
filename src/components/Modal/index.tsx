import classNames from 'classnames';
import { ReactNode } from 'react';
import './index.scss';

interface Props {
  children: ReactNode;
  visible?: boolean;
  className?: string;
};

export function Modal({ children, visible = false, className = '' }: Props) {
  return <div className={classNames({
    'modal': true,
    'modal-visible': visible,
    [className]: !!className
  })}>
    <div className='modal-panel'>{children}</div>
  </div>;
}