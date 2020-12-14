import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';

import Slider from '.';

export default {
  title: 'Slider',
  component: Slider,
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: #ccc;
  border: 1px solid #bbb;
  color: #fff;
  padding: 10rem 0;
  text-align: center;
  width: 30rem;
`;

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
};

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Slider>
);
