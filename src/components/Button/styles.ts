import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.6rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
