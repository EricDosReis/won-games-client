import styled, { css, DefaultTheme } from 'styled-components';

import { TextFieldProps } from '.';

type WrapperProps = {
  error: boolean;
} & Pick<TextFieldProps, 'iconPosition' | 'disabled'>;

const wrapperModifiers = {
  left: (theme: DefaultTheme) => css`
    ${Icon} {
      margin-right: ${theme.spacings.xsmall};
      order: 0;
    }
  `,

  right: (theme: DefaultTheme) => css`
    ${Icon} {
      margin-left: ${theme.spacings.xsmall};
      order: 1;
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, iconPosition, disabled, error }) => css`
    ${!!iconPosition && wrapperModifiers[iconPosition](theme)};
    ${disabled && wrapperModifiers.disabled(theme)};
    ${error && wrapperModifiers.error(theme)};
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.lightGray};
    display: flex;
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    padding: ${theme.spacings.xxsmall} 0;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;

    svg {
      width: 2.2rem;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
