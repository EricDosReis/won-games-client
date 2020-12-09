import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /play the new crashLands season/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /defy death/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the banner with ribbon', () => {
    const { container } = renderWithTheme(
      <Banner
        ribbon="20% OFF"
        ribbonColor="secondary"
        ribbonSize="small"
        {...props}
      />,
    );

    const ribbon = screen.getByText(/20% off/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      fontSize: '1.2rem',
      height: '2.6rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
