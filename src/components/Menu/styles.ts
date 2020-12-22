import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    position: relative;
    text-align: center;
    text-decoration: none;

    &::after {
      content: '';
      background-color: ${theme.colors.primary};
      display: block;
      height: 0.3rem;
      position: absolute;
      left: 50%;
      width: 0;
      transition: left 0.15s linear, width 0.15s linear;
    }

    &:hover {
      &::after {
        left: 0;
        width: 100%;
      }
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.15s ease-in-out;
    z-index: ${theme.layers.base};

    > svg {
      cursor: pointer;
      height: 2.4rem;
      width: 2.4rem;
      margin: ${theme.spacings.xsmall};
      position: absolute;
      top: 0;
      right: 0;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }

    ${RegisterBox} {
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`;
