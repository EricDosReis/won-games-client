import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOptions, { PaymentOptionsProps } from '.';
import mock from './mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mock,
  },
  argTypes: {
    cards: {
      type: '',
    },
    handlePayment: {
      action: 'clicked',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<PaymentOptionsProps> = args => (
  <div style={{ maxWidth: '80rem' }}>
    <PaymentOptions {...args} />
  </div>
);
