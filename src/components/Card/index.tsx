import classNames from 'classnames';
import { Figure } from 'components';
import { CardTheme, FigureType } from 'models';
import './index.scss';

interface Props {
  number?: number;
  figure: FigureType;
  theme?: CardTheme;
  flipped?: boolean;
  onClick?: () => void
}

export function Card ({ flipped = false, number = 0, figure, theme = CardTheme.ZIGZAG, onClick = undefined }: Props) {
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
