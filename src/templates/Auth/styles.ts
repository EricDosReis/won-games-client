import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;

    &::after {
      content: '';
      background-color: ${theme.colors.black};
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xlarge}
      ${theme.spacings.small};
    position: relative;
    z-index: ${theme.layers.base};
  `}
`;

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    line-height: 1.3;

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 28rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      width: 38rem;
    `}
  `}
`;
