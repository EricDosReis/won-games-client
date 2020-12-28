import { Story, Meta } from '@storybook/react/types-6-0';

import GameInfo, { GameInfoProps } from '.';
import mock from './mock';

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mock,
} as Meta;

export const Basic: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto', padding: '1rem' }}>
    <GameInfo {...args} />
  </div>
);
