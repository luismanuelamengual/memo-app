import { flipMemoCard, goToHomePage } from 'actions';
import { Button, Card, Column, Page, Row, Text, TextType } from 'components';
import { Path } from 'models';
import { Navigate } from 'react-router-dom';
import { MemoSessionCard, useMemoStore } from 'stores';
import './index.scss';

export function MemoPage() {
  const { isSessionRunning, cards } = useMemoStore(state => ({ isSessionRunning: !!state.session, cards: state.session?.cards }));
  return (!isSessionRunning ?
    <Navigate to={Path.HOME} replace /> :
    <Page id='memo-page'>
      <Text className='main-title' type={TextType.TITLE}>Memo App</Text>
      <Row>
        {cards.map((card: MemoSessionCard) => (
          <Column key={card.number} xs={6} sm={4} md={3} lg={cards.length > 12? 2 : undefined}>
            <Card card={card} flipped={card.flipped || card.temporaryFlipped} onClick={card.flipped || card.temporaryFlipped ? undefined : (() => flipMemoCard(card.number))}></Card>
          </Column>
        ))}
      </Row>
      <Button onClick={goToHomePage}>Salir</Button>
    </Page>
  );
}