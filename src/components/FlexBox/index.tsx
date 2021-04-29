import { Padding } from 'types/padding';
import { Margin } from 'types/margin';

import * as S from './styles';

export type FlexBoxProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  children: React.ReactNode;
} & Padding &
  Margin;

const FlexBox = ({
  flexDirection = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
  children,
  ...props
}: FlexBoxProps) => (
  <S.Wrapper
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexWrap={flexWrap}
    {...props}
  >
    {children}
  </S.Wrapper>
);

export default FlexBox;
