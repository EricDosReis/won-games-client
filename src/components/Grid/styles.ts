import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { GridProps } from '.';

const modifiers = {
  columns: (columns: number) => css`
    grid-template-columns: repeat(${columns}, 1fr);
  `,

  custom: (custom: string) => css`
    grid-template-columns: ${custom};
  `,

  xs: (columns: number) => css`
    ${media.lessThan('small')`
       grid-template-columns: repeat(${columns}, 1fr);
    `}
  `,

  sm: (columns: number) => css`
    ${media.lessThan('medium')`
       grid-template-columns: repeat(${columns}, 1fr);
    `}
  `,

  md: (columns: number) => css`
    ${media.lessThan('large')`
      grid-template-columns: repeat(${columns}, 1fr);
    `}
  `,

  lg: (columns: number) => css`
    ${media.greaterThan('large')`
       grid-template-columns: repeat(${columns}, 1fr);
    `}
  `,
};

export const Wrapper = styled.div<GridProps>`
  ${({ theme, columns, xs, sm, md, lg, custom }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: ${theme.grid.gutter};

    ${!!columns && modifiers.columns(columns)}
    ${!!custom && modifiers.custom(custom)};
    ${!!xs && modifiers.xs(xs)};
    ${!!sm && modifiers.sm(sm)};
    ${!!md && modifiers.md(md)};
    ${!!lg && modifiers.lg(lg)};
  `};
`;
