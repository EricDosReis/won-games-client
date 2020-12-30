import { renderWithTheme } from 'utils/tests/helpers';

import Grid from '.';

describe('<Grid />', () => {
  it('should render the grid', () => {
    const { container } = renderWithTheme(
      <Grid>
        <p>Lorem, ipsum dolor.</p>
      </Grid>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        grid-gap: 3.2rem;
      }

      <div
        class="c0"
      >
        <p>
          Lorem, ipsum dolor.
        </p>
      </div>
    `);
  });
});
