import Cart, { CartProps } from 'templates/Cart';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import cartItemsMock from 'components/CartList/mock';
import cardsMock from 'components/PaymentOptions/mock';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: cartItemsMock,
      total: 'R$ 330,00',
      cards: cardsMock,
    },
  };
}
