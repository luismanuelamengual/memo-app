import { startMemoGame } from 'actions';
import { Logo, Page, Text } from 'components';
import './index.scss';

export function HomePage() {

  function test() {
    startMemoGame();
  }

  return (
    <Page id='home-page'>
      <Logo />
      <Text type='title'>Memo Test App</Text>
      <button onClick={test}>test</button>
    </Page>
  );
}