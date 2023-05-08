import type { Meta, StoryObj } from '@storybook/react';
import { CardTheme, Figure } from 'models';
import { Card } from './index';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Classic: Story = {
  args: {
    card: {
      figure: Figure.CAMERA,
      number: 1,
      theme: CardTheme.CLASSIC
    },
    flipped: true
  }
};

export const Folded: Story = {
  args: {
    card: {
      figure: Figure.CAMERA,
      number: 1,
      theme: CardTheme.CLASSIC
    },
    flipped: false
  }
};