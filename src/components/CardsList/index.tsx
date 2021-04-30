import Heading from 'components/Heading';
import { PaymentCard } from 'components/PaymentOptions';

import * as S from './styles';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map(({ number, img, flag }) => (
      <S.Card key={number}>
        <img src={img} alt={flag} />

        <span>{number}</span>
      </S.Card>
    ))}
  </>
);

export default CardsList;
