import { renderWithTheme } from 'utils/tests/helpers';

import { FormWrapper, FormLink } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          <a href="#">My nice link</a>
        </FormLink>
      </FormWrapper>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 .sc-bdfBwQ {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKsewC {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        color: #030517;
        font-size: 1.4rem;
        text-align: center;
      }

      .c1 a {
        border-bottom: 0.1rem solid #3CD3C1;
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        border-bottom: 0.1rem solid #29b3a3;
        color: #29b3a3;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <a
            href="#"
          >
            My nice link
          </a>
        </div>
      </div>
    `);
  });
});
