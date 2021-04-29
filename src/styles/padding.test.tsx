import React from 'react';
import styled from 'styled-components';

import { renderWithTheme } from 'utils/tests/helpers';
import { Padding } from 'types/padding';

import { buildPadding } from './padding';

const PaddingComponent = styled.div<Padding>`
  ${buildPadding};
`;

describe('Mixin: padding', () => {
  it('should apply padding', () => {
    const { container } = renderWithTheme(<PaddingComponent p="5rem" />);

    expect(container.firstChild).toHaveStyle({
      padding: '5rem',
    });
  });

  it('should apply horizontal and vertical padding', () => {
    const { container } = renderWithTheme(
      <PaddingComponent px="2rem" py="1rem" />,
    );

    expect(container.firstChild).toHaveStyle({
      paddingTop: '1rem',
      paddingLeft: '2rem',
      paddingBottom: '1rem',
      paddingRight: '2rem',
    });
  });

  it('should apply padding correctly', () => {
    const { container } = renderWithTheme(
      <PaddingComponent
        px="5rem"
        py="10rem"
        pt="1rem"
        pr="2rem"
        pb="3rem"
        pl="4rem"
      />,
    );

    expect(container.firstChild).toHaveStyle({
      paddingTop: '1rem',
      paddingRight: '2rem',
      paddingBottom: '3rem',
      paddingLeft: '4rem',
    });
  });
});
