import classNames from 'classnames';
import { Figure } from 'components';
import { CardTheme, Figure as FigureModel } from 'models';
import './index.scss';

interface Props {
  flipped?: boolean;
  figure: FigureModel;
  number?: number;
  theme?: CardTheme;
  className?: string;
  onClick?: () => void;
}

export function Card ({ flipped = false, figure, number = 0, theme = CardTheme.CLASSIC, className='', onClick = undefined }: Props) {
  return <div className={classNames({
    'card': true,
    'card-flipped': flipped,
    'card-clickable': !!onClick,
    [`card-theme-${theme}`]: true,
    [className]: !!className
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
