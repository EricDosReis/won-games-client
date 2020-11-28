import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

const wrapperModifiers = {
  normal: () => css`
    height: 3.3rem;
    width: 11rem;
  `,
  large: () => css`
    height: 5.9rem;
    width: 20rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      height: 4.5rem;
      width: 5.8rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile()};
  `}
`;
