import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  publisher: '2k',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
  platforms: ['windows', 'linux', 'mac'],
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    const { container } = renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: /developer/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /publisher/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /genres/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render the release date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/nov 21, 2020/i)).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
