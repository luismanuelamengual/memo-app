import type { Meta, StoryObj } from '@storybook/react';
import { CardTheme, FigureType } from 'models';
import { Card } from './index';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Classic: Story = {
  args: {
    figure: FigureType.CAMERA,
    number: 1,
    theme: CardTheme.CLASSIC,
    flipped: true
  }
};

export const Folded: Story = {
  args: {
    figure: FigureType.CAMERA,
    number: 1,
    theme: CardTheme.CLASSIC,
    flipped: false
  }
};