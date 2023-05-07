import classNames from 'classnames';
import { Figure } from 'components';
import { Figure as FigureModel } from 'models';
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
      <div className='logo-item'><Figure figure={FigureModel.BALL} /></div>
      <div className='logo-item'><Figure figure={FigureModel.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureModel.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureModel.BALL} /></div>
    </div>
  </div>;
}