import { FigureType } from 'models';
import { ClockFigure } from './ClockFigure';

const figureComponents = {
  [FigureType.CLOCK]: <ClockFigure />
};

interface Props {
  figure: FigureType
}

export function Figure({ figure }: Props) {
  return figureComponents[figure];
}