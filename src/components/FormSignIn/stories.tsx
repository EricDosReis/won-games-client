import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const Basic: Story = args => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <FormSignIn {...args} />
  </div>
);
