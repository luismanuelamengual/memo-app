import { FigureType } from 'models';

interface Props {
  figure: FigureType
}

export function Figure({ figure }: Props) {
  return <img src={`./svgs/figures/${figure}.svg`} />;
}