import { Story, Meta } from '@storybook/react/types-6-0';

import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<HeadingProps> = args => <Heading {...args} />;

Basic.args = {
  children: 'Most Popular',
};
