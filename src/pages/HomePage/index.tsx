import { Card, Logo, Page, Text } from 'components';
import { FigureType } from 'models';
import { useState } from 'react';
import './index.scss';

export function HomePage() {
  const [ flipped, setFlipped ] = useState<boolean>(false);

  return (
    <Page id='home-page'>
      <Logo />
      <Text type='title'>Memo Test App</Text>
      <Card flipped={flipped} figure={FigureType.CLOCK} onClick={() => setFlipped(!flipped)}></Card>
    </Page>
  );
}