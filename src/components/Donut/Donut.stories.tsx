import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Donut from '.';

export default {
  title: 'Donut',
  component: Donut,
  argTypes: {
    percentage: { 
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = (args) => <Donut {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  percentage: 75,
};
