import classNames from 'classnames';
import { Level } from 'models';
import { useMemoStore } from 'stores';
import './index.scss';

interface Props {
  className?: string;
};

export function ScoreBoard({ className = '' }: Props) {
  const highScores = useMemoStore(state => state.highScores);
  return <div className={classNames({
    'scores-board': true,
    [className]: !!className
  })}>
    <div className='scores-header'>Best Scores</div>
    <div className='scores-container'>
      <div>Easy</div>
      <div>Medium</div>
      <div>Hard</div>
      <div>{Math.floor(highScores[Level.EASY])}</div>
      <div>{Math.floor(highScores[Level.MEDIUM])}</div>
      <div>{Math.floor(highScores[Level.HARD])}</div>
    </div>
  </div>;
}