import 'match-media-mock';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Dropdown from '.';

const title = <h1 aria-label="toogle dropdown">Click here</h1>;

describe('<Dropdown />', () => {
  it('should render title correctly', () => {
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>,
    );

    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>,
    );

    const content = screen.getByText(/content/).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });

  it('should handle the size', () => {
    renderWithTheme(
      <Dropdown title={title} size="md">
        <span>content</span>
      </Dropdown>,
    );

    userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(screen.getByText(/content/)).toHaveStyle({ width: '20rem' });
  });
});
