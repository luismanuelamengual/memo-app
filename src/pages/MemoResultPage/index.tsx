import { Player } from '@lottiefiles/react-lottie-player';
import { Page, Text } from 'components';
import './index.scss';

export function MemoResultPage() {
  return (
    <Page id='memo-result-page'>
      <Text type='title'>Memo App</Text>
      <Player className='congratulations' autoplay loop src="/lotties/congratulations.json"/>
    </Page>
  );
}