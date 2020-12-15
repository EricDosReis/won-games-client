import { renderWithTheme } from 'utils/tests/helpers';

import Container from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <p>Won Games</p>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule('max-width', '130rem');

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin-right: auto;
        margin-left: auto;
        max-width: 130rem;
        padding-right: calc(3.2rem / 2);
        padding-left: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <p>
          Won Games
        </p>
      </div>
    `);
  });
});
