import { Story, Meta } from '@storybook/react/types-6-0';

import OrdersList, { OrdersListProps } from '.';
import mock from './mock';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mock,
  },
} as Meta;

export const Basic: Story<OrdersListProps> = args => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <OrdersList {...args} />
  </div>
);
