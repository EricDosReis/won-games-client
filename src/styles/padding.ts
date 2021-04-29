import { css } from 'styled-components';

import { Padding } from 'types/padding';

const padding = {
  p: (value: string) => css`
    padding: ${value};
  `,

  px: (value: string) => css`
    padding-right: ${value};
    padding-left: ${value};
  `,

  py: (value: string) => css`
    padding-top: ${value};
    padding-bottom: ${value};
  `,

  pt: (value: string) => css`
    padding-top: ${value};
  `,

  pr: (value: string) => css`
    padding-right: ${value};
  `,

  pb: (value: string) => css`
    padding-bottom: ${value};
  `,

  pl: (value: string) => css`
    padding-left: ${value};
  `,
};

export const buildPadding = ({ p, px, py, pt, pr, pb, pl }: Padding) => {
  return css`
    ${p && padding.p(p)};
    ${px && padding.px(px)};
    ${py && padding.py(py)};
    ${pt && padding.pt(pt)};
    ${pr && padding.pr(pr)};
    ${pb && padding.pb(pb)};
    ${pl && padding.pl(pl)};
  `;
};
