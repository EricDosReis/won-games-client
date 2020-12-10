import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Highlight from '.';
import * as S from './styles';

const props = {
  title: 'Title',
  subtitle: 'Subtitle',
  buttonLabel: 'Buy now',
  buttonLink: '/red-dead-redemption-2',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight />', () => {
  it('should render the highlight content', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/subtitle/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should render with float image', () => {
    renderWithTheme(<Highlight floatImage="/float-image.png" {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    );
  });

  it('should render right align by default', () => {
    const { container } = renderWithTheme(
      <Highlight floatImage="/float-image.png" {...props} />,
    );

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'float-image content'",
      'grid-template-columns': '1.3fr 2fr',
    });

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render left align', () => {
    const { container } = renderWithTheme(
      <Highlight floatImage="/float-image.png" alignment="left" {...props} />,
    );

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content float-image'",
      'grid-template-columns': '2fr 1.3fr',
    });

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });

    expect(container.firstChild).toHaveStyleRule('justify-self', 'end', {
      modifier: `${S.FloatImage}`,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
