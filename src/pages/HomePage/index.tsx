import { startMemoGame } from 'actions';
import { Logo, Page, Text } from 'components';
import './index.scss';

export function HomePage() {
  return (
    <Page id='home-page'>
      <Logo />
      <Text type='title'>Memo App</Text>
      <button onClick={startMemoGame}>test</button>
    </Page>
  );
}