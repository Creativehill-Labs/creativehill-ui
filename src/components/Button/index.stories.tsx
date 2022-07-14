import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { buttonColors } from './types';

export default {
  title: `Components/Button`,
  component: Button,
  argTypes: {
    color: {
      control: `select`,
      options: Object.values(buttonColors),
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Button`,
};
