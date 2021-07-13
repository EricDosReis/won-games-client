import { Story, Meta } from '@storybook/react/types-6-0';

import UserDropdown, { UserDropdownProps } from '.';

export default {
  title: 'Dropdown/UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<UserDropdownProps> = args => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
);

Basic.args = {
  username: 'Eric',
};
