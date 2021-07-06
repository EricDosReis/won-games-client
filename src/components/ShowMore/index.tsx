import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import * as S from './styles';

export type ShowMoreProps = {
  onClick?: () => void;
};

const ShowMore = ({ onClick }: ShowMoreProps) => (
  <S.Wrapper role="button" onClick={onClick}>
    <span>Show More</span>

    <ArrowDown size="34" />
  </S.Wrapper>
);

export default ShowMore;
