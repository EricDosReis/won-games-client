import { renderWithTheme } from 'utils/tests/helpers';

import Divider from '.';

describe('<Divider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
