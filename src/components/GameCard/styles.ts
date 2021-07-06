import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    animation: placeholderShimmer 1s linear infinite forwards;
    background-size: 80rem 14rem;
    background: ${darken(0.05, theme.colors.white)};
    background-image: linear-gradient(
      to right,
      ${darken(0.05, theme.colors.white)} 0%,
      ${darken(0.1, theme.colors.white)} 20%,
      ${darken(0.05, theme.colors.white)} 40%,
      ${darken(0.05, theme.colors.white)} 100%
    );
    height: 14rem;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.font.sizes.xsmall};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.medium};
  `}
`;

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`;

export const FavoriteButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    color: ${theme.colors.primary};
    cursor: pointer;
    outline: none;
    position: absolute;
    top: -0.5rem;
    right: 0;

    svg {
      width: 2.5rem;
    }
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

type PriceProps = {
  isPromotional?: boolean;
};

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xsmall};
    text-decoration: line-through;
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    align-items: center;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    height: 3rem;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.small};
    `};
  `}
`;
