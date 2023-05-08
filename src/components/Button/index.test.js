import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from 'components';

describe('<Button />', () => {
  it('renders button successfully', () => {
    render(<Button>Click Me</Button>);
  });

  it('renders button class successfully', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button');
  });

  it('renders primary button successfully', () => {
    render(<Button type={ButtonType.PRIMARY}>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-primary');
  });

  it('renders disabled button successfully', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-disabled');
  });
});

