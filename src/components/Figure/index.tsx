import { FigureType } from 'models';
import './index.scss';

interface Props {
  figure: FigureType
}

export function Figure({ figure }: Props) {
  return <img className='figure' src={`./svgs/figures/${figure}.svg`} />;
}