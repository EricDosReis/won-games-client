import { Story, Meta } from '@storybook/react/types-6-0';

import ShowMore, { ShowMoreProps } from '.';

export default {
  title: 'ShowMore',
  component: ShowMore,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<ShowMoreProps> = args => <ShowMore {...args} />;
