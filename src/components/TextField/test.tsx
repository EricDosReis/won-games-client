import { Email } from '@styled-icons/material-outlined';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" />,
    );

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('it should change its value when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />,
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should not change the value when disabled', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();

    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('should not be accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />,
    );

    const input = screen.getByLabelText('TextField');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it('should be accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />,
    );

    const input = screen.getByLabelText('TextField');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).toHaveFocus();
  });

  it('should render with icon', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
      />,
    );

    const icon = screen.getByTestId('icon');

    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveStyle({
      marginRight: '1.6rem',
      order: '0',
    });
  });

  it('should render with icon on the right', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      marginLeft: '1.6rem',
      order: '1',
    });
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        error="Error"
      />,
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
