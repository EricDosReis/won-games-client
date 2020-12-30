import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('large')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`;

export default Section;
