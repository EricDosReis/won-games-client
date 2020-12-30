import { renderWithTheme } from 'utils/tests/helpers';

import Section from '.';

describe('<Section />', () => {
  it('should render the section', () => {
    const { container } = renderWithTheme(
      <Section>
        <p>Won Games</p>
      </Section>,
    );

    expect(container.firstChild).toHaveStyle({
      marginBottom: '3.2rem',
    });

    expect(container.firstChild).toHaveStyleRule(
      'margin-bottom',
      'calc(4.8rem * 2)',
      {
        media: '(min-width: 1170px)',
      },
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin-bottom: 3.2rem;
      }

      @media (min-width:1170px) {
        .c0 {
          margin-bottom: calc(4.8rem * 2);
        }
      }

      <section
        class="c0"
      >
        <p>
          Won Games
        </p>
      </section>
    `);
  });
});
