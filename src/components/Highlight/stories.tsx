import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/red-dead-redemption-2',
    backgroundImage: '/img/highlight-bg.jpg',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const withFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight floatImage="/img/highlight-float.png" {...args} />
  </div>
);
