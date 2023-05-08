import classNames from 'classnames';
import { Figure } from 'components';
import { FigureType } from 'models';
import './index.scss';

interface Props {
  className?: string;
}

export function Logo({ className = '' }: Props) {
  return <div className={classNames({
    'logo': true,
    [className]: !!className
  })}>
    <div className='logo-content'>
      <div className='logo-item'><Figure figure={FigureType.BALL} /></div>
      <div className='logo-item'><Figure figure={FigureType.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureType.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureType.BALL} /></div>
    </div>
  </div>;
}