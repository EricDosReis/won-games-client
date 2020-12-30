import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as GalleryStyles from 'components/Gallery/styles';

export const Content = styled.div`
  margin-top: 20rem;

  ${GalleryStyles.Wrapper} {
    ${media.lessThan('medium')`
      display: none;
    `}
  }
`;

type CoverProps = {
  src: string;
};

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    height: 40rem;
    opacity: 0.4;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    ${media.greaterThan('medium')`
      height: 50rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`;
