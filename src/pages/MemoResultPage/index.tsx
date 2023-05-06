import { Player } from '@lottiefiles/react-lottie-player';
import { goToHomePage } from 'actions';
import { Button, Page, Score, Text, TextType } from 'components';
import { useMemoStore } from 'stores';
import './index.scss';

export function MemoResultPage() {
  const sessionScore = useMemoStore(state => state.session?.score);

  return (
    <Page id='memo-result-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <Player className='congratulations' autoplay loop src="/lotties/congratulations.json"/>
      <Text>¡¡ Congratulations !!</Text>
      <Text>Your current score was ...</Text>
      <Score score={sessionScore} />
      <Button onClick={goToHomePage}>Salir</Button>
    </Page>
  );
}