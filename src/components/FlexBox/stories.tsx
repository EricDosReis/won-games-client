import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { css } from 'styled-components';

import FlexBox, { FlexBoxProps } from '.';

export default {
  title: 'FlexBox',
  component: FlexBox,
} as Meta;

type ContentProps = {
  width?: string;
};

const Content = styled.div<ContentProps>`
  ${({ theme, width }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xxsmall};
    text-align: center;
    width: ${width || '30rem'};
  `}
`;

export const Basic: Story<FlexBoxProps> = args => (
  <FlexBox {...args}>
    <Content>Content 1</Content>
    <Content>Content 2</Content>
    <Content>Content 3</Content>
  </FlexBox>
);

Basic.args = {
  flexDirection: 'row',
};

export const FlexWrap: Story<FlexBoxProps> = args => (
  <FlexBox {...args}>
    <Content width="50rem">Content 1</Content>
    <Content width="50rem">Content 2</Content>
    <Content width="50rem">Content 3</Content>
  </FlexBox>
);

FlexWrap.args = {
  flexDirection: 'row',
  flexWrap: 'wrap',
};
