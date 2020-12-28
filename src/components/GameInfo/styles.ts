import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge};
    position: relative;

    ${media.greaterThan('small')`
      padding-top: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        font-size: ${theme.font.sizes.small};
        top: ${theme.spacings.small};
        right: ${theme.spacings.small};

        &::before {
          border: none;
        }
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      margin-bottom: ${theme.spacings.xxsmall};
      width: 100%;
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        margin-bottom: 0;
        width: initial;
      }
    `}
  `}
`;
