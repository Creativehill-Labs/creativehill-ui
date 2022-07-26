import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { buttonColors, buttonVariants, buttonSizes } from './types';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';

export default {
  title: `Components/Button`,
  component: Button,
  argTypes: {
    ...hideUnnecessaryControls(),
    color: {
      control: `select`,
      options: Object.values(buttonColors),
      defaultValue: buttonColors.PRIMARY,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `버튼`,
  variant: buttonVariants.FILLED,
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  disabled: false,
};
