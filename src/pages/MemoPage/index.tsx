import { Card, Column, Page, Row } from 'components';
import { MemoSession, MemoStore, useMemoStore } from 'stores';
import './index.scss';

export function MemoPage() {
  const session: MemoSession = useMemoStore(state => state.session);

  function onCardClicked() {
    MemoStore.setSessionCardFlipped(12, true);
  }

  return (
    <Page id='memo-page'>
      <Row>
        {session.cards.map((card) => (
          <Column key={card.number} xs={6} sm={4} md={3}>
            <Card card={card} flipped={card.flipped} onClick={() => onCardClicked()}></Card>
          </Column>
        ))}
      </Row>
    </Page>
  );
}