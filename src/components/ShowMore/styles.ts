import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    font-weight: bold;
    padding: ${theme.spacings.medium};
    text-align: center;
    text-transform: uppercase;

    &:hover,
    &:focus {
      svg {
        transform: translateY(0.5rem);
      }
    }

    span {
      display: block;
    }

    svg {
      color: ${theme.colors.primary};
      transition: transform ${theme.transition.fast};
    }
  `}
`;
