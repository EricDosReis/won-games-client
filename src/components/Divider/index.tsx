import styled, { css } from 'styled-components';

const Divider = styled.hr`
  ${({ theme }) => css`
    background: rgba(181, 181, 181, 0.3);
    border: 0;
    height: 0.1rem;
    margin: ${theme.spacings.xlarge} auto;
  `}
`;

export default Divider;
