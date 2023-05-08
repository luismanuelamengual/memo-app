import { Player } from '@lottiefiles/react-lottie-player';
import { flipMemoCard, goToHomePage } from 'actions';
import { Button, Card, Column, Page, Row, Text, TextType } from 'components';
import { Path } from 'models';
import { Navigate } from 'react-router-dom';
import { MemoSessionCard, useMemoStore } from 'stores';
import './index.scss';

export function MemoPage() {
  const { isSessionRunning, isSessionFinished, cards } = useMemoStore(state => ({ isSessionRunning: !!state.session, isSessionFinished: state.isSessionEnded(), cards: state.session?.cards }));
  return (!isSessionRunning ?
    <Navigate to={Path.HOME} replace /> :
    <Page id='memo-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <Row>
        {cards.map((card: MemoSessionCard) => (
          <Column key={card.number} xs={6} sm={4} md={3} lg={cards.length > 12? 2 : undefined}>
            <Card figure={card.figure} theme={card.theme} number={card.number} flipped={card.flipped || card.temporaryFlipped} onClick={card.flipped || card.temporaryFlipped ? undefined : (() => flipMemoCard(card.number))}></Card>
          </Column>
        ))}
      </Row>
      <Button disabled={isSessionFinished} onClick={goToHomePage}>Exit</Button>
      {isSessionFinished && <Player className='success-animation' autoplay src="/lotties/success.json"/>}
    </Page>
  );
}