import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColor } from '.';

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge}
    `}
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColor) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 5rem;
    }
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.medium};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
