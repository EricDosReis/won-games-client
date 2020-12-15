import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-top: ${theme.spacings.small};

      li {
        background: ${theme.colors.white};
        border-radius: 100%;
        cursor: pointer;
        height: 1.2rem;
        width: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        cursor: pointer;
        height: 1.2rem;
        width: 1.2rem;
        opacity: 0;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        margin: 0 auto;
        max-width: 104rem;
      }

      .slick-dots {
        flex-direction: column;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`;
