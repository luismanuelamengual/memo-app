import { Figure as FigureModel } from 'models';

interface Props {
  figure: FigureModel
}

export function Figure({ figure }: Props) {
  return <img src={`/svgs/figures/${figure}.svg`} />;
}