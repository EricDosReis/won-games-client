import { Story, Meta } from '@storybook/react/types-6-0';

import ExploreSidebar, { ExploreSidebarProps } from '.';
import mock from './mock';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: mock,
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<ExploreSidebarProps> = args => (
  <div style={{ width: '30rem' }}>
    <ExploreSidebar {...args} />
  </div>
);

export const WithInitialValues: Story<ExploreSidebarProps> = args => (
  <div style={{ width: '30rem' }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
);
