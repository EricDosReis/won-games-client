import React from 'react';
import styled from 'styled-components';

import { renderWithTheme } from 'utils/tests/helpers';
import { Margin } from 'types/margin';

import { buildMargin } from './margin';

const MarginComponent = styled.div<Margin>`
  ${buildMargin};
`;

describe('Mixin: margin', () => {
  it('should apply margin', () => {
    const { container } = renderWithTheme(<MarginComponent m="5rem" />);

    expect(container.firstChild).toHaveStyle({
      margin: '5rem',
    });
  });

  it('should apply horizontal and vertical margin', () => {
    const { container } = renderWithTheme(
      <MarginComponent mx="2rem" my="1rem" />,
    );

    expect(container.firstChild).toHaveStyle({
      marginTop: '1rem',
      marginLeft: '2rem',
      marginBottom: '1rem',
      marginRight: '2rem',
    });
  });

  it('should apply margin correctly', () => {
    const { container } = renderWithTheme(
      <MarginComponent
        mx="5rem"
        my="10rem"
        mt="1rem"
        mr="2rem"
        mb="3rem"
        ml="4rem"
      />,
    );

    expect(container.firstChild).toHaveStyle({
      marginTop: '1rem',
      marginRight: '2rem',
      marginBottom: '3rem',
      marginLeft: '4rem',
    });
  });
});
