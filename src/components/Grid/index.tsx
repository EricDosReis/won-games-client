import React from 'react';

import * as S from './styles';

export interface GridProps {
  columns?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  custom?: string;
  gap?: string;
  children: React.ReactNode;
}

const Grid = ({
  columns,
  xs,
  sm,
  md,
  lg,
  custom,
  gap,
  children,
}: GridProps) => (
  <S.Wrapper
    columns={columns}
    custom={custom}
    gap={gap}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
  >
    {children}
  </S.Wrapper>
);

export default Grid;
