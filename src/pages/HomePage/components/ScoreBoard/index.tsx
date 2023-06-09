import classNames from 'classnames';
import { MemoSessionLevel } from 'models';
import { useMemoStore } from 'stores';
import './index.scss';

interface Props {
  className?: string;
};

export function ScoreBoard({ className = '' }: Props) {
  const highScores = useMemoStore(state => state.highScores);
  return <div className='scores-container'>
    <div className={classNames({
      'scores-board': true,
      [className]: !!className
    })}>
      <div className='scores-header'>Best Scores</div>
      <div className='scores-content'>
        <div className='headerEasy'>Easy</div>
        <div className='headerMedium'>Medium</div>
        <div className='headerHard'>Hard</div>
        <div className='valueEasy'>{Math.floor(highScores[MemoSessionLevel.EASY])}</div>
        <div className='valueMedium'>{Math.floor(highScores[MemoSessionLevel.MEDIUM])}</div>
        <div className='valueHard'>{Math.floor(highScores[MemoSessionLevel.HARD])}</div>
      </div>
    </div>
  </div>;
}