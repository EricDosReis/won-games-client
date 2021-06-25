import OrdersList, { OrdersListProps } from 'components/OrdersList';
import Profile from 'templates/Profile';

import mocks from 'components/OrdersList/mock';

export default function OrdersPage({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: mocks,
    },
  };
}
