import { resumeMemoGame, startMemoGame } from 'actions';
import { Button, ButtonType, Logo, Page, Text } from 'components';
import './index.scss';
import { useMemoStore } from 'stores';

export function HomePage() {
  const session = useMemoStore(state => state.session);

  return (
    <Page id='home-page'>
      <Logo />
      <Text className='main-title' type='title'>Memo App</Text>
      <Button type={ButtonType.PRIMARY} onClick={startMemoGame}>Play</Button>
      <Button disabled={!session} onClick={resumeMemoGame}>Continue</Button>
    </Page>
  );
}