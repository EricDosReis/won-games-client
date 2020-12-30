import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('large')`
      overflow-x: hidden;
    `}

    .slick-prev,
    .slick-next {
      color: ${theme.colors.white};
      cursor: pointer;
      display: block;
      padding: 0;
      position: absolute;
      top: 50%;
      height: 2.5rem;
      width: 2.5rem;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      cursor: pointer;
      margin: 0 ${theme.spacings.xsmall};
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }
  `}
`;

type ModalProps = {
  isOpen: boolean;
};

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`;

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: right;
  `}
`;

export const Content = styled.div`
  max-height: 70rem;
  max-width: 100rem;
  width: 100%;
`;
