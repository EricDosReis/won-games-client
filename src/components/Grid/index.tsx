import React from 'react';

import * as S from './styles';

export interface GridProps {
  columns?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  custom?: string;
  children: React.ReactNode;
}

const Grid = ({ columns, xs, sm, md, lg, custom, children }: GridProps) => (
  <S.Wrapper columns={columns} custom={custom} xs={xs} sm={sm} md={md} lg={lg}>
    {children}
  </S.Wrapper>
);

export default Grid;
