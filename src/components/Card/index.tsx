import classNames from 'classnames';
import { Figure } from 'components';
import { Card as CardModel, CardTheme } from 'models';
import './index.scss';

interface Props {
  flipped?: boolean;
  card: CardModel;
  onClick?: () => void;
}

export function Card ({ flipped = false, card, onClick = undefined }: Props) {
  const { number = 0, figure, theme } = card;
  return <div className={classNames({
    'card': true,
    'card-flipped': flipped,
    'card-clickable': !!onClick,
    'card-zigzag': theme == CardTheme.ZIGZAG
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
