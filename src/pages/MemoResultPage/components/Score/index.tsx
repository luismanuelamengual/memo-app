import classNames from 'classnames';
import { useMemoStore } from 'stores';
import './index.scss';

interface Props {
  className?: string;
};

export function Score({ className = '' }: Props) {
  const { score, isRecord } = useMemoStore(state => ({ score: state.session?.score, isRecord: state.session ? (state.session.score >= state.highScores[state.session.level]) : false}));
  return <div className={classNames({
    'score': true,
    [className]: !!className
  })}>
    {Math.floor(score)}
    {isRecord && <img className='crown' src='./svgs/crown.svg' />}
  </div>;
}