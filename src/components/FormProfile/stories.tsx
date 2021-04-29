import { Story, Meta } from '@storybook/react/types-6-0';

import FormProfile from '.';

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
} as Meta;

export const Basic: Story = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <FormProfile />
  </div>
);
