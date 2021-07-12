import { Story, Meta } from '@storybook/react/types-6-0';

import mock from 'components/CartList/mock';
import CartDropdown, { CartDropdownProps } from '.';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: mock,
    total: 'R$ 300,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<CartDropdownProps> = args => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);
