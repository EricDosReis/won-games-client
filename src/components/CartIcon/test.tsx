import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render without badge', () => {
    renderWithTheme(<CartIcon quantity={3} />);

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
  });

  it('should render only positive quantity', () => {
    renderWithTheme(<CartIcon quantity={-1} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(-1)).not.toBeInTheDocument();
  });
});
