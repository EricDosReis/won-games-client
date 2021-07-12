import { Story, Meta } from '@storybook/react/types-6-0';

import CartList, { CartListProps } from '.';

import mock from './mock';

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mock,
    total: 'R$ 330,00',
  },
  argTypes: {
    items: {
      type: '',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<CartListProps> = args => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
);

export const WithButton: Story<CartListProps> = args => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
);

WithButton.args = {
  hasButton: true,
};

export const WithoutItems: Story<CartListProps> = args => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} items={[]} />
  </div>
);
