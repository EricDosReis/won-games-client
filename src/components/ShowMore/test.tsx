import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ShowMore from '.';

describe('<ShowMore />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ShowMore />);

    expect(screen.getByText(/show more/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
