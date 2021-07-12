import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mock from 'components/CartList/mock';
import CartDropdown from '.';

describe('<CartDropdown />', () => {
  it('should render CartIcon and its badge', () => {
    renderWithTheme(<CartDropdown items={mock} total="R$ 300,00" />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${mock.length}`)).toBeInTheDocument();
  });

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={mock} total="R$ 300,00" />);

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
    expect(screen.getByText(`${mock[0].title}`)).toBeInTheDocument();
  });
});
