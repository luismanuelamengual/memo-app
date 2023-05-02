import classNames from 'classnames';
import './index.scss';

interface Props {
  type?: 'primary' | 'normal';
  disabled?: boolean;
  children: string;
}

export function Button({ type = 'normal', disabled = false, children}: Props) {
  return <button disabled={disabled} className={classNames({
    'button': true,
    'button-primary': type === 'primary'
  })}>
    {children}
  </button>;
}