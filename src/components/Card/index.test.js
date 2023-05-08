import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from 'components';
import { FigureType } from 'models';

describe('<Card />', () => {
  it('renders card successfully', () => {
    const { container } = render(<Card figure={FigureType.BEER} />);
    expect(container.firstChild).toHaveClass('card');
  });

  it('renders flipped card successfully', () => {
    const { container } = render(<Card flipped figure={FigureType.BEER} />);
    expect(container.firstChild).toHaveClass('card-flipped');
  });
});
