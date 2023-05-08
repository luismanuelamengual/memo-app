import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextType } from './index';

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Normal: Story = {
  args: {
    children: 'Test Text',
    type: TextType.PARAGRAPH
  }
};

export const Title: Story = {
  args: {
    children: 'Test Text',
    type: TextType.TITLE
  }
};

export const ModalTitle: Story = {
  args: {
    children: 'Test Text',
    type: TextType.MODAL_TITLE
  }
};