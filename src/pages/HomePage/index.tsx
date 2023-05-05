import { resumeMemoGame, startMemoGame } from 'actions';
import { Button, ButtonType, Logo, Page, Text } from 'components';
import { useMemoStore } from 'stores';
import './index.scss';

export function HomePage() {
  const { session, isSessionEnded } = useMemoStore(state => ({ session: state.session, isSessionEnded: state.isSessionEnded }));

  return (
    <Page id='home-page'>
      <Logo />
      <Text className='main-title' type='title'>Memo App</Text>
      <Button type={ButtonType.PRIMARY} onClick={startMemoGame}>Play</Button>
      <Button disabled={!session || isSessionEnded()} onClick={resumeMemoGame}>Continue</Button>
    </Page>
  );
}