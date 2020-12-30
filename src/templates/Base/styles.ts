import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1 0 auto;
`;

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};

    ${media.greaterThan('medium')`
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
      padding-top: calc(${theme.spacings.xxlarge} * 2);
    `}
  `}
`;
