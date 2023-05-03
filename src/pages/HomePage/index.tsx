import { Card, Logo, Page, Text } from 'components';
import { CardTheme, Figure } from 'models';
import { useState } from 'react';
import './index.scss';

export function HomePage() {
  const [ flipped, setFlipped ] = useState<boolean>(false);

  return (
    <Page id='home-page'>
      <Logo />
      <Text type='title'>Memo Test App</Text>
      <Card card={{ number: 8, figure: Figure.CLOCK, theme: CardTheme.ZIGZAG}} flipped={flipped} onClick={() => setFlipped(!flipped)}></Card>
    </Page>
  );
}