import { ReactNode } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

enum ContainerMode {
  NORMAL = 'normal',
  FLUID = 'fluid'
}

interface Props {
  mode?: ContainerMode;
  children: ReactNode;
  className?: string;
};

export function Container({ children, mode = ContainerMode.NORMAL, className = '' }: Props) {
  return <div className={classNames({
    [styles.container]: true,
    [styles.fluid]: mode === ContainerMode.FLUID,
    [className]: !!className
  })}>{children}</div>;
}