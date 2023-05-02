import classNames from 'classnames';
import { Figure } from 'components';
import { CardStyle, FigureType } from 'models';
import './index.scss';

interface Props {
  figure: FigureType;
  flipped?: boolean;
  style?: CardStyle;
  onClick?: () => void
}

export function Card ({ flipped = false, figure, style = CardStyle.ZIGZAG, onClick = undefined }: Props) {
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
      <div className='card-content-back' />
    </div>
  </div>;
}
