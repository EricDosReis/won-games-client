import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      display: flex;
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const GameContent = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: ${theme.spacings.xxsmall};
    width: 9.6rem;
    height: 5.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 15rem;
      height: 7rem;
    `};
  `}
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
    `};
  `}
`;

export const DownloadWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: 0.2rem ${theme.spacings.xxsmall};
  `}
`;

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};
    min-width: 28rem;

    ${media.greaterThan('medium')`
      flex: 1;
      flex-direction: column-reverse;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 0;
    `}
  `}
`;

export const CardInfo = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`;
