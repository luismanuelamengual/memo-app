import { resumeMemoGame, startMemoGame } from 'actions';
import { Button, ButtonType, Logo, Modal, Page, Text, TextType } from 'components';
import { Level } from 'models';
import { useState } from 'react';
import { useMemoStore } from 'stores';
import './index.scss';

export function HomePage() {
  const [ newGameModalOpen, setNewGameModalOpen ] = useState<boolean>(false);
  const { session, isSessionEnded } = useMemoStore(state => ({ session: state.session, isSessionEnded: state.isSessionEnded }));

  function onPlayButtonClicked() {
    setNewGameModalOpen(true);
  }

  return (
    <Page id='home-page'>
      <Logo className='main-logo'/>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <Button type={ButtonType.PRIMARY} onClick={onPlayButtonClicked}>Play</Button>
      <Button disabled={!session || isSessionEnded()} onClick={resumeMemoGame}>Continue</Button>

      {newGameModalOpen && <Modal className='new-game-modal' onClose={() => setNewGameModalOpen(false)}>
        <Text type={TextType.MODAL_TITLE}>Choose the difficulty</Text>
        <Button onClick={() => startMemoGame(Level.EASY)}>Easy</Button>
        <Button onClick={() => startMemoGame(Level.MEDIUM)}>Medium</Button>
        <Button onClick={() => startMemoGame(Level.HARD)}>Hard</Button>
      </Modal>}
    </Page>
  );
}