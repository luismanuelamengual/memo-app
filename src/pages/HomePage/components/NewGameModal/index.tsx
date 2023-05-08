import { startMemoGame } from 'actions';
import classNames from 'classnames';
import { Button, Modal, Text, TextType } from 'components';
import { MemoSessionLevel } from 'models';
import './index.scss';

interface Props {
  className?: string;
  open?: boolean;
  onClose?: () => void;
};

export function NewGameModal({ className = '', open, onClose }: Props) {
  return <Modal className={classNames({
    'new-game-modal': true,
    [className]: !!className
  })} onClose={onClose} open={open}>
    <Text type={TextType.MODAL_TITLE}>Choose the difficulty</Text>
    <Button onClick={() => startMemoGame(MemoSessionLevel.EASY)}>Easy</Button>
    <Button onClick={() => startMemoGame(MemoSessionLevel.MEDIUM)}>Medium</Button>
    <Button onClick={() => startMemoGame(MemoSessionLevel.HARD)}>Hard</Button>
  </Modal>;
}