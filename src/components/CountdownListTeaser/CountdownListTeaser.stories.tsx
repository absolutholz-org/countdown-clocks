import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountdownListTeaser from '.';

export default {
  title: 'CountdownListTeaser',
  component: CountdownListTeaser,
} as ComponentMeta<typeof CountdownListTeaser>;

const Template: ComponentStory<typeof CountdownListTeaser> = (args) => (
  <CountdownListTeaser {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  countdown: {
    uid: 'asdfqwer',
    name: 'Christmas in Ohio',
    targetDate: new Date('2021-12-23T12:20:00'),
    startDate: new Date('2021-09-18T12:20:00'),
  },
};
