import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { css } from 'styled-components';

import Grid, { GridProps } from '.';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const Column = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const Basic: Story<GridProps> = args => (
  <Grid {...args}>
    <Column>Column 1</Column>
    <Column>Column 2</Column>
    <Column>Column 3</Column>
    <Column>Column 4</Column>
  </Grid>
);

export const Custom: Story<GridProps> = args => (
  <Grid {...args}>
    <Column>Column 1</Column>
    <Column>Column 2</Column>
    <Column>Column 3</Column>
    <Column>Column 4</Column>
  </Grid>
);

Custom.args = {
  custom: '1fr 20rem 2fr',
};
