import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { buttonColors, buttonVariants, buttonSizes } from './types';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import IconChevronLeft from '../../icons/IconChevronLeft';
import IconChevronRight from '../../icons/IconChevronRight';

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
    iconLeft: {
      control: false,
    },
    iconRight: {
      control: false,
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

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: `버튼`,
  variant: buttonVariants.FILLED,
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  disabled: false,
  iconLeft: <IconChevronLeft />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: `버튼`,
  variant: buttonVariants.FILLED,
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  disabled: false,
  iconRight: <IconChevronRight />,
};
