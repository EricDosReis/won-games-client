import styled, { css, DefaultTheme } from 'styled-components';
import { EmptyProps } from '.';

type WrapperProps = Pick<EmptyProps, 'small' | 'inverted'>;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    ${Image} {
      max-width: 20rem;
    }

    ${Title} {
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${Description} {
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
    }
  `,

  inverted: (theme: DefaultTheme) => css`
    ${Description} {
      color: ${theme.colors.black};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, small, inverted }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${theme.spacings.xsmall};

    ${small && wrapperModifiers.small(theme)};
    ${inverted && wrapperModifiers.inverted(theme)};
  `}
`;
