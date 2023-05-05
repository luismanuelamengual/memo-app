import { startMemoGame } from 'actions';
import { Button, ButtonType, Logo, Page, Text } from 'components';
import './index.scss';

export function HomePage() {
  return (
    <Page id='home-page'>
      <Logo />
      <Text className='main-title' type='title'>Memo App</Text>
      <Button type={ButtonType.PRIMARY} onClick={startMemoGame}>Play</Button>
      <Button>Continue</Button>
    </Page>
  );
}