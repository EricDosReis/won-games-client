import { renderWithTheme } from 'utils/tests/helpers';

import FlexBox from '.';

describe('<FlexBox />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <FlexBox>
        <div>FlexBox content 1</div>
        <div>FlexBox content 2</div>
      </FlexBox>,
    );

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'stretch',
      'justify-content': 'flex-start',
      'flex-wrap': 'nowrap',
    });
  });

  it('should render with props passed', () => {
    const { container } = renderWithTheme(
      <FlexBox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <div>FlexBox content 1</div>
        <div>FlexBox content 2</div>
      </FlexBox>,
    );

    expect(container.firstChild).toHaveStyle({
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-wrap': 'wrap',
    });
  });
});
