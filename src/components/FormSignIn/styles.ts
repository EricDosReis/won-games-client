import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: block;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    text-align: right;

    &:hover,
    &:focus {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`;
