import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  left: () => css`
    grid-template-areas: 'content float-image';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,

  right: () => css`
    grid-template-areas: 'float-image content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    display: grid;
    height: 23rem;
    position: relative;

    &::after {
      content: '';
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      height: 100%;
      width: 100%;
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${!!alignment && wrapperModifiers[alignment]()};
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding: ${theme.spacings.xsmall};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `};
  `};
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: float-image;
    align-self: end;
    max-height: 23rem;
    max-width: 100%;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `};
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `};
`;
