import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '30rem', padding: '1.5rem' }}>
    <TextField {...args} />
  </div>
);

export const Icon: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '30rem', padding: '1.5rem' }}>
    <TextField {...args} />
  </div>
);

Icon.args = {
  icon: <Email />,
};

export const Error: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '30rem', padding: '1.5rem' }}>
    <TextField {...args} error="Ops ... something is wrong" />
  </div>
);
