import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { tint } from 'polished';

import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 ${theme.spacings.xxsmall};
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall};

    ${ButtonStyles.Wrapper} {
      outline: 0;
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`;
