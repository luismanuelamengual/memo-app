import classNames from 'classnames';
import { Figure } from 'components';
import { FigureType } from 'models';
import './index.scss';

interface Props {
  figure: FigureType
  flipped?: boolean;
  onClick?: () => void
}

export function Card ({ flipped = false, figure, onClick = () => null }: Props) {
  return <div className={classNames({
    'card': true,
    'card-flipped': flipped
  })} onClick={onClick}>
    <div className='card-content'>
      <div className='card-content-front'>
        <Figure figure={figure} />
      </div>
      <div className='card-content-back'>
        Dorso de la tarjetuli
      </div>
    </div>
  </div>;
}
