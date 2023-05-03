import { Figure as FigureModel } from 'models';
import { ClockFigure } from './ClockFigure';

const figureComponents = {
  [FigureModel.CLOCK]: <ClockFigure />
};

interface Props {
  figure: FigureModel
}

export function Figure({ figure }: Props) {
  return figureComponents[figure];
}