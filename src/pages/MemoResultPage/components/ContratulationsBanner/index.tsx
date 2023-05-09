import { Player } from '@lottiefiles/react-lottie-player';
import classNames from 'classnames';
import './index.scss';

interface Props {
  className?: string;
};

export function CongratulationsBanner({ className = '' }: Props) {
  return <div className={classNames({
    'congratulations-banner': true,
    [className]: !!className
  })}>
    <Player className='animation' autoplay loop src="./lotties/congratulations.json"/>
  </div>;
}