import { css } from 'styled-components';

import { Margin } from 'types/margin';

const margin = {
  m: (value: string) => css`
    margin: ${value};
  `,

  mx: (value: string) => css`
    margin-right: ${value};
    margin-left: ${value};
  `,

  my: (value: string) => css`
    margin-top: ${value};
    margin-bottom: ${value};
  `,

  mt: (value: string) => css`
    margin-top: ${value};
  `,

  mr: (value: string) => css`
    margin-right: ${value};
  `,

  mb: (value: string) => css`
    margin-bottom: ${value};
  `,

  ml: (value: string) => css`
    margin-left: ${value};
  `,
};

export const buildMargin = ({ m, mx, my, mt, mr, mb, ml }: Margin) => {
  return css`
    ${m && margin.m(m)};
    ${mx && margin.mx(mx)};
    ${my && margin.my(my)};
    ${mt && margin.mt(mt)};
    ${mr && margin.mr(mr)};
    ${mb && margin.mb(mb)};
    ${ml && margin.ml(ml)};
  `;
};
