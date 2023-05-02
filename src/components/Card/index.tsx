import classNames from 'classnames';
import { Figure } from 'components';
import { CardStyle, FigureType } from 'models';
import './index.scss';

interface Props {
  number?: number;
  figure: FigureType;
  style?: CardStyle;
  flipped?: boolean;
  onClick?: () => void
}

export function Card ({ flipped = false, number = 0, figure, style = CardStyle.ZIGZAG, onClick = undefined }: Props) {
  return <div className={classNames({
    'card': true,
    'card-flipped': flipped,
    'card-clickable': !!onClick,
    'card-zigzag': style == CardStyle.ZIGZAG
  })} onClick={onClick}>
    <div className='card-content'>
      <div className='card-content-front'>
        <Figure figure={figure} />
      </div>
      <div className='card-content-back'>
        {number > 0 && <div className='card-numberer'>{number}</div>}
      </div>
    </div>
  </div>;
}
