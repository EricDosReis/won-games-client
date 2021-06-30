import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { css } from 'styled-components';

import { renderWithTheme } from 'utils/tests/helpers';

import ExploreSidebar from '.';
import { Overlay } from './styles';
import mock from './mock';

const onFilter = jest.fn();

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={mock} onFilter={onFilter} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /system/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should render the inputs', () => {
    renderWithTheme(<ExploreSidebar items={mock} onFilter={onFilter} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument();
  });

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={mock} onFilter={onFilter} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={mock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />,
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
  });

  it('should filter with initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        items={mock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' });
  });

  it('should filter with checked values', () => {
    renderWithTheme(<ExploreSidebar items={mock} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/windows/i));
    userEvent.click(screen.getByLabelText(/linux/i));
    userEvent.click(screen.getByLabelText(/low to high/i));

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high',
    });
  });

  it('should alternate between radio options', () => {
    renderWithTheme(<ExploreSidebar items={mock} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/low to high/i));
    userEvent.click(screen.getByLabelText(/high to low/i));

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' });
  });

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={mock} onFilter={onFilter} />,
    );

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `),
    };

    const Element = container.firstChild;

    expect(Element).not.toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByLabelText(/open filters/));

    expect(Element).toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByLabelText(/close filters/));

    expect(Element).not.toHaveStyleRule('opacity', '1', variant);
  });
});
