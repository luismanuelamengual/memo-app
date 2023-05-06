import classNames from 'classnames';
import './index.scss';

export enum TextType {
  TITLE = 'title',
  PARAGRAPH = 'paragraph',
  MODAL_TITLE = 'modal-title'
}

interface Props {
  type?: TextType;
  className?: string;
  children: string;
};

export function Text({ type = TextType.PARAGRAPH, children, className = '' }: Props) {
  return <div className={classNames({
    'text': true,
    [`text-${type}`]: true,
    [className]: !!className
  })}>{children}</div>;
}