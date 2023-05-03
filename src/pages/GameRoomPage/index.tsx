import { Card, Page } from 'components';
import { CardTheme, Figure } from 'models';
import { useState } from 'react';
import './index.scss';

export function GameRoomPage() {
  const [ flipped, setFlipped ] = useState<boolean>(false);

  return (
    <Page id='game-room-page'>
      <Card card={{ number: 8, figure: Figure.BOOK, theme: CardTheme.ZIGZAG}} flipped={flipped} onClick={() => setFlipped(!flipped)}></Card>
    </Page>
  );
}