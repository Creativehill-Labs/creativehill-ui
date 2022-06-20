import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { buttonColors, buttonSizes } from './types';

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

export const PrimarySmallEnabled = Template.bind({});
PrimarySmallEnabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.SM,
  children: `Button`,
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.SM,
  children: `Button`,
  disabled: true,
};

export const PrimaryMediumEnabled = Template.bind({});
PrimaryMediumEnabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  children: `Button`,
};

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  children: `Button`,
  disabled: true,
};

export const PrimaryLargeEnabled = Template.bind({});
PrimaryLargeEnabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.LG,
  children: `Button`,
};

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  color: buttonColors.PRIMARY,
  size: buttonSizes.LG,
  children: `Button`,
  disabled: true,
};

export const SecondarySmallEnabled = Template.bind({});
SecondarySmallEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.SM,
  children: `Button`,
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.SM,
  children: `Button`,
  disabled: true,
};

export const SecondaryMediumEnabled = Template.bind({});
SecondaryMediumEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.MD,
  children: `Button`,
};

export const SecondaryMediumDisabled = Template.bind({});
SecondaryMediumDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.MD,
  children: `Button`,
  disabled: true,
};

export const SecondaryLargeEnabled = Template.bind({});
SecondaryLargeEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.LG,
  children: `Button`,
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.LG,
  children: `Button`,
  disabled: true,
};
