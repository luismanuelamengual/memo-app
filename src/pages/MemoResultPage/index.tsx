import { Player } from '@lottiefiles/react-lottie-player';
import { Logo, Page, Text } from 'components';
import './index.scss';

export function MemoResultPage() {
  return (
    <Page id='memo-result-page'>
      <Logo />
      <Text type='title'>Memo Test App</Text>

      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
        style={{ height: '300px', width: '300px' }}
      />
    </Page>
  );
}