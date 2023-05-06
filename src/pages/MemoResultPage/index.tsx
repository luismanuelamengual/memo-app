import { Player } from '@lottiefiles/react-lottie-player';
import { goToHomePage } from 'actions';
import { Button, Page, Score, Text, TextType } from 'components';
import { Path } from 'models';
import { Navigate } from 'react-router-dom';
import { useMemoStore } from 'stores';
import './index.scss';

export function MemoResultPage() {
  const { isSessionEnded, sessionScore } = useMemoStore(state => ({ isSessionEnded: state.isSessionEnded() ,sessionScore: state.session?.score}));
  return (!isSessionEnded ?
    <Navigate to={Path.HOME} replace /> :
    <Page id='memo-result-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <div className='congratulations-container'>
        <Player className='congratulations' autoplay loop src="/lotties/congratulations.json"/>
      </div>
      <Text>¡¡ Congratulations !!</Text>
      <Text>Your current score was ...</Text>
      <Score score={sessionScore} />
      <Button onClick={goToHomePage}>Salir</Button>
    </Page>
  );
}