import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    display: flex;

    ${media.greaterThan('large')`
      border: 0;
      flex-direction: column;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`;

const linkModifiers = {
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

type LinkProps = {
  isActive?: boolean;
};

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    text-decoration: none;
    transition: background-color, color, ${theme.transition.fast};

    &:hover,
    &:focus {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;

      > span {
        display: none;
      }
    `}

    ${media.lessThan('large')`
      flex: 1;
    `}

    ${isActive && linkModifiers.active(theme)};
  `}
`;
