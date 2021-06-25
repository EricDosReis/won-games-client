import styled, { css } from 'styled-components';

import { buildMargin } from 'styles/margin';
import { buildPadding } from 'styles/padding';

import { FlexBoxProps } from '.';

export const Wrapper = styled.div<FlexBoxProps>`
  ${({ flexDirection, alignItems, justifyContent, flexWrap, ...props }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};

    ${buildPadding({ ...props })};
    ${buildMargin({ ...props })};
  `}
`;
