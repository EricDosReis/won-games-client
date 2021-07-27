import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/population-zero.jpg',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`,
    );

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    expect(screen.getByAltText(props.title)).toHaveAttribute(
      'src',
      '/population-zero.jpg',
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument();
    expect(screen.getByText(/235,00/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without promotional price', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(/235,00/i);

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render with promotional price', () => {
    const { container } = renderWithTheme(
      <GameCard promotionalPrice="R$ 180,00" {...props} />,
    );

    expect(screen.getByText(/235,00/i)).toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(screen.getByText(/180,00/i)).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard favorite {...props} />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFavorite method when favorite is clicked', () => {
    const onFavorite = jest.fn();

    renderWithTheme(<GameCard onFavorite={onFavorite} {...props} />);

    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(onFavorite).toBeCalled();
  });

  it('should render the game card with ribbon', () => {
    const { container } = renderWithTheme(
      <GameCard
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
