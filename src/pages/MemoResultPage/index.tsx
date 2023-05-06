import { Player } from '@lottiefiles/react-lottie-player';
import { goToHomePage } from 'actions';
import { Button, Page, Text, TextType } from 'components';
import './index.scss';

export function MemoResultPage() {
  return (
    <Page id='memo-result-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <Player className='congratulations' autoplay loop src="/lotties/congratulations.json"/>
      <Button onClick={goToHomePage}>Salir</Button>
    </Page>
  );
}