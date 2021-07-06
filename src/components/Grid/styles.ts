import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { GridProps } from '.';

const wrapperModifiers = {
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
  ${({ theme, columns, xs, sm, md, lg, custom, gap }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: ${gap || theme.grid.gutter};

    ${!!columns && wrapperModifiers.columns(columns)}
    ${!!custom && wrapperModifiers.custom(custom)};
    ${!!lg && wrapperModifiers.lg(lg)};
    ${!!md && wrapperModifiers.md(md)};
    ${!!sm && wrapperModifiers.sm(sm)};
    ${!!xs && wrapperModifiers.xs(xs)};
  `};
`;
