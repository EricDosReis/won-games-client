import Base from 'templates/Base';
import Container from 'components/Container';
import Grid from 'components/Grid';
import Empty from 'components/Empty';
import Divider from 'components/Divider';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import CartList, { CartListProps } from 'components/CartList';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <Grid sm={1} custom="2fr minmax(30rem, 1fr)">
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </Grid>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />

        <Showcase
          title="You may like these games"
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  );
};

export default Cart;
