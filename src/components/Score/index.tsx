import classNames from 'classnames';
import './index.scss';

interface Props {
  score: number;
  className?: string;
};

export function Score({ score, className = '' }: Props) {
  return <div className={classNames({
    'score': true,
    [className]: !!className
  })}>{score.toFixed(2)}</div>;
}