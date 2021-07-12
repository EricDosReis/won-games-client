import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { DropdownProps } from '.';

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    position: relative;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;

    &::before {
      content: '';
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      position: absolute;
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`;

type WrapperProps = {
  isOpen?: boolean;
} & Pick<DropdownProps, 'size'>;

const wrapperSizes = {
  sm: '10rem',
  md: '20rem',
  lg: '50rem',
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen, size }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()};
      ${!isOpen && wrapperModifiers.close()};

      > * {
        width: ${wrapperSizes[size!]};

        ${media.lessThan('medium')`
          width: 30rem;
        `}
      }
    }
  `}
`;
