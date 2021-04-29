import styled, { css } from 'styled-components';

import { buildMargin } from 'styles/margin';
import { buildPadding } from 'styles/padding';

import { FlexBoxProps } from '.';

export const Wrapper = styled.div<FlexBoxProps>`
  ${({
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};

    ${buildPadding({ p, px, py, pt, pr, pb, pl })};
    ${buildMargin({ m, mx, my, mt, mr, mb, ml })};
  `}
`;
