import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <div>Content</div>
  </Dropdown>
);

Basic.args = {
  title: 'Click here',
  size: 'sm',
};
