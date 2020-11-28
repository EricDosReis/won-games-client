import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      'font-size': '1.4rem',
      height: '4rem',
      padding: '0.8rem 3.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      'font-size': '1.2rem',
      height: '3rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    );

    expect(
      screen.getByRole('button', { name: /Buy now/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
