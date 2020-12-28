import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'Game title',
  description: 'Game description',
  price: '$30,00',
};

describe('<GameInfo />', () => {
  it('should render game information', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /game title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/game description/i)).toBeInTheDocument();

    expect(screen.getByText(/\$30,00/)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });
});
