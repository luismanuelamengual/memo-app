import classNames from 'classnames';
import { useMemoStore } from 'stores';
import './index.scss';

interface Props {
  className?: string;
};

export function Score({ className = '' }: Props) {
  const sessionScore = useMemoStore(state => state.session?.score);
  return <div className={classNames({
    'score': true,
    [className]: !!className
  })}>{Math.floor(sessionScore)}</div>;
}