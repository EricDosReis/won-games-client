import { useState } from 'react';
import { Add, ShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';

import * as S from './styles';

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Content>
        <Heading size="small" color="black" lineBottom>
          Payment
        </Heading>

        <S.CardList>
          {cards?.map(card => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />

                {card.number}
              </S.CardInfo>

              <Radio
                name="creditCard"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={16} /> Add a new credit card
          </S.AddCard>
        </S.CardList>
      </S.Content>

      <S.Footer>
        <Button as="a" minimal fullWidth>
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
