import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: 2.4rem;
    width: 2.4rem;
    position: relative;
  `}
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`;
