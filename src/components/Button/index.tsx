import classNames from 'classnames';
import './index.scss';

interface Props {
  type?: 'primary' | 'normal';
  disabled?: boolean;
  children: string;
  onClick?: () => void
}

export function Button({ type = 'normal', disabled = false, children, onClick = undefined}: Props) {
  return <button disabled={disabled} className={classNames({
    'button': true,
    'button-primary': type === 'primary'
  })} onClick={onClick}>
    {children}
  </button>;
}