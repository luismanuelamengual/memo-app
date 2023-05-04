import { flipMemoCard } from 'actions';
import { Card, Column, Page, Row } from 'components';
import { MemoSession, useMemoStore } from 'stores';
import './index.scss';

export function MemoPage() {
  const session: MemoSession = useMemoStore(state => state.session);
  return (
    <Page id='memo-page'>
      <Row>
        {session.cards.map((card) => (
          <Column key={card.number} xs={6} sm={4} md={3}>
            <Card card={card} flipped={card.flipped || card.temporaryFlipped} onClick={card.flipped || card.temporaryFlipped ? undefined : (() => flipMemoCard(card.number))}></Card>
          </Column>
        ))}
      </Row>
    </Page>
  );
}