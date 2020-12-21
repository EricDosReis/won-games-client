import styled, { css } from 'styled-components';
import { RadioProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    background-color: transparent;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
    width: 1.8rem;
    outline: none;
    transition: background-color ${theme.transition.fast};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    line-height: 1.7rem;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;
