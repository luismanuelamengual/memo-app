import classNames from 'classnames';
import { ReactNode } from 'react';
import './index.scss';

interface Props {
  children: ReactNode;
  open?: boolean;
  className?: string;
};

export function Modal({ children, open = false, className = '' }: Props) {
  function onOverlayClick() {
    console.log('overlay !!!');
  }

  return <div className={classNames({
    'modal': true,
    'modal-open': open,
    [className]: !!className
  })}>
    <div className='modal-overlay' onClick={onOverlayClick}></div>
    <div className='modal-panel'>{children}</div>
  </div>;
}