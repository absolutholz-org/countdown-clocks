import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountdownClock from '.';

export default {
  title: 'CountdownClock',
  component: CountdownClock,
  argTypes: {
    targetDate: {
      control: { type: 'date' },
    },
    creationDate: {
      control: { type: 'date' },
    },
  },
} as ComponentMeta<typeof CountdownClock>;

const Template: ComponentStory<typeof CountdownClock> = (args) => (
  <CountdownClock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  targetDate: new Date('2021-12-23T12:20:00'),
  creationDate: new Date('2021-09-18T12:20:00'),
};
