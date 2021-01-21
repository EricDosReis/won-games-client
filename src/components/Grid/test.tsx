import { renderWithTheme } from 'utils/tests/helpers';
import Grid from '.';

describe('Component: Grid', () => {
  it('should render Grid', () => {
    const { container } = renderWithTheme(
      <Grid>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'grid-template-columns': 'repeat(auto-fit,minmax(10rem,1fr))',
      gap: '3.2rem',
    });
  });

  it('should render Grid with columns passed', () => {
    const { container } = renderWithTheme(
      <Grid columns={2}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'grid-template-columns': 'repeat(2,1fr)',
    });
  });

  it('should render Grid with 1 columns if extra small', () => {
    const { container } = renderWithTheme(
      <Grid xs={1}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-columns',
      'repeat(1,1fr)',
      {
        media: '(max-width:450px)',
      },
    );
  });

  it('should render Grid with 2 columns if small', () => {
    const { container } = renderWithTheme(
      <Grid sm={2}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-columns',
      'repeat(2,1fr)',
      {
        media: '(max-width:768px)',
      },
    );
  });

  it('should render Grid with 3 columns if medium', () => {
    const { container } = renderWithTheme(
      <Grid md={3}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-columns',
      'repeat(3,1fr)',
      {
        media: '(max-width:1170px)',
      },
    );
  });

  it('should render Grid with 4 columns if large', () => {
    const { container } = renderWithTheme(
      <Grid lg={4}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
        <p>Content 4</p>
      </Grid>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,1fr)',
      {
        media: '(min-width:1170px)',
      },
    );
  });

  it('should render Grid with custom columns setup', () => {
    const { container } = renderWithTheme(
      <Grid custom="1fr 20rem 2fr">
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Grid>,
    );

    expect(container.firstChild).toHaveStyle({
      'grid-template-columns': '1fr 20rem 2fr',
    });
  });
});
