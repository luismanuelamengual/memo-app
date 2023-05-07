import { goToHomePage } from 'actions';
import { Button, Page, Text, TextType } from 'components';
import { Path } from 'models';
import { Navigate } from 'react-router-dom';
import { useMemoStore } from 'stores';
import { CongratulationsBanner, Score } from './components';
import './index.scss';

export function MemoResultPage() {
  const isSessionEnded = useMemoStore(state => state.isSessionEnded());
  return (!isSessionEnded ?
    <Navigate to={Path.HOME} replace /> :
    <Page id='memo-result-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <CongratulationsBanner />
      <Text>¡¡ Congratulations !!</Text>
      <Text>Your current score was ...</Text>
      <Score />
      <Button onClick={goToHomePage}>Exit</Button>
    </Page>
  );
}