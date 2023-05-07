import { resumeMemoGame, startMemoGame } from 'actions';
import { Button, ButtonType, Modal, Page, Text, TextType } from 'components';
import { Level } from 'models';
import { useState } from 'react';
import { useMemoStore } from 'stores';
import { Logo, ScoreBoard } from './components';
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
      {newGameModalOpen && <Modal className='new-game-modal' onClose={() => setNewGameModalOpen(false)}>
        <Text type={TextType.MODAL_TITLE}>Choose the difficulty</Text>
        <Button onClick={() => startMemoGame(Level.EASY)}>Easy</Button>
        <Button onClick={() => startMemoGame(Level.MEDIUM)}>Medium</Button>
        <Button onClick={() => startMemoGame(Level.HARD)}>Hard</Button>
      </Modal>}
    </Page>
  );
}