import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountdownList from '.';

export default {
  title: 'CountdownList',
  component: CountdownList,
} as ComponentMeta<typeof CountdownList>;

const Template: ComponentStory<typeof CountdownList> = (args) => (
  <CountdownList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  countdowns: [
    {
      uid: 'asdfqwer',
      name: 'Christmas in Ohio',
      targetDate: new Date('2021-12-23T12:20:00'),
      startDate: new Date('2021-09-18T12:20:00'),
    },
    {
      uid: 'qwerasdf',
      name: "Vroni's Birthday",
      targetDate: new Date('2021-10-28T00:00:00'),
      startDate: new Date('2020-10-29T00:00:00'),
    },
  ],
};
