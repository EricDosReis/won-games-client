import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import ProfileMenu from '.';

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />);

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the menu with an active link passed', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/me" />);

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      backgroundColor: '#F231A5',
      color: '#FAFAFA',
    });
  });
});
