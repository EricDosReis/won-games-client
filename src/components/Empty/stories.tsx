import { Story, Meta } from '@storybook/react/types-6-0';
import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true,
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<EmptyProps> = args => <Empty {...args} />;

export const Inverted: Story<EmptyProps> = args => <Empty {...args} />;

Inverted.args = {
  inverted: true,
};

Inverted.parameters = {
  backgrounds: {
    default: 'won-light',
  },
};

export const Small: Story<EmptyProps> = args => <Empty {...args} />;

Small.args = {
  small: true,
};
