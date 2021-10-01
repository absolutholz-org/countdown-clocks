import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountdownForm from '.';

export default {
  title: 'CountdownForm',
  component: CountdownForm,
  // argTypes: {
  //   targetDate: {
  //     control: { type: 'date' },
  //   },
  //   startDate: {
  //     control: { type: 'date' },
  //   },
  // },
} as ComponentMeta<typeof CountdownForm>;

const Template: ComponentStory<typeof CountdownForm> = (args) => (
  <CountdownForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: (formData) => {
    console.log('submitted', formData);
  },
};
