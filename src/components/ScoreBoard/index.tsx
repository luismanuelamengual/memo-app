import classNames from 'classnames';
import './index.scss';

interface Props {
  easyScore: number;
  mediumScore: number;
  hardScore: number;
  className?: string;
};

export function ScoreBoard({ easyScore, mediumScore, hardScore, className = '' }: Props) {
  return <div className={classNames({
    'scores-board': true,
    [className]: !!className
  })}>
    <div className='scores-header'>Best Scores</div>
    <div className='scores-container'>
      <div>Easy</div>
      <div>Medium</div>
      <div>Hard</div>
      <div>{Math.floor(easyScore)}</div>
      <div>{Math.floor(mediumScore)}</div>
      <div>{Math.floor(hardScore)}</div>
    </div>
  </div>;
}