import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Section from 'components/Section';
import * as HeadingStyles from 'components/Heading/styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/styles';
import * as HighlightStyles from 'components/Highlight/styles';

export const Wrapper = styled(Section)`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-left: calc(-${theme.grid.gutter} / 2);
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('large')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
  `}
`;
