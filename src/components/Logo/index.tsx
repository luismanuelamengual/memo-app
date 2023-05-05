import { Figure } from 'components';
import { Figure as FigureModel } from 'models';
import './index.scss';

export function Logo() {
  return <div className='logo'>
    <div className='logo-content'>
      <div className='logo-item'><Figure figure={FigureModel.BALL} /></div>
      <div className='logo-item'><Figure figure={FigureModel.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureModel.CAR} /></div>
      <div className='logo-item'><Figure figure={FigureModel.BALL} /></div>
    </div>
  </div>;
}