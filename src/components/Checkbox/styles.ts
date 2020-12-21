import styled, { css } from 'styled-components';

import { CheckboxProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
    width: 1.8rem;
    outline: none;
    position: relative;
    transition: background-color border ${theme.transition.fast};

    &::before {
      content: '';
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      height: 0.9rem;
      width: 0.6rem;
      opacity: 0;
      position: absolute;
      top: 0.1rem;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    line-height: 1.7rem;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;
