import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
  `}
`;
