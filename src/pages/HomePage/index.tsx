import { resumeMemoGame } from 'actions';
import { Button, ButtonType, Page, Text, TextType } from 'components';
import { useState } from 'react';
import { useMemoStore } from 'stores';
import { Logo, NewGameModal, ScoreBoard } from './components';
import './index.scss';

export function HomePage() {
  const [ newGameModalOpen, setNewGameModalOpen ] = useState<boolean>(false);
  const isSessionRunning = useMemoStore(state => !!state.session && !state.isSessionEnded());
  return (
    <Page id='home-page'>
      <Logo className='main-logo'/>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <ScoreBoard />
      <Button type={ButtonType.PRIMARY} onClick={() => setNewGameModalOpen(true)}>Play</Button>
      <Button disabled={!isSessionRunning} onClick={resumeMemoGame}>Continue</Button>
      <NewGameModal open={newGameModalOpen} onClose={() => setNewGameModalOpen(false)} />
    </Page>
  );
}