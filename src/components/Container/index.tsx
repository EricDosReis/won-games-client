import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    margin-right: auto;
    margin-left: auto;
    max-width: ${theme.grid.container};
    padding-right: calc(${theme.grid.gutter} / 2);
    padding-left: calc(${theme.grid.gutter} / 2);
    width: 100%;
  `}
`;

export default Container;
