import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { buttonColors, buttonFills, buttonSizes } from './types';

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

export const PrimarySolidSmallEnabled = Template.bind({});
PrimarySolidSmallEnabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.SM,
  children: `Button`,
};

export const PrimarySolidSmallDisabled = Template.bind({});
PrimarySolidSmallDisabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.SM,
  children: `Button`,
  disabled: true,
};

export const PrimarySolidMediumEnabled = Template.bind({});
PrimarySolidMediumEnabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.MD,
  children: `Button`,
};

export const PrimarySolidMediumDisabled = Template.bind({});
PrimarySolidMediumDisabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.MD,
  children: `Button`,
  disabled: true,
};

export const PrimarySolidLargeEnabled = Template.bind({});
PrimarySolidLargeEnabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.LG,
  children: `Button`,
};

export const PrimarySolidLargeDisabled = Template.bind({});
PrimarySolidLargeDisabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.LG,
  children: `Button`,
  disabled: true,
};

export const PrimaryOutlineSmallEnabled = Template.bind({});
PrimaryOutlineSmallEnabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.OUTLINE,
  size: buttonSizes.SM,
  children: `Button`,
};

export const PrimaryOutlineSmallDisabled = Template.bind({});
PrimaryOutlineSmallDisabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.OUTLINE,
  size: buttonSizes.SM,
  children: `Button`,
  disabled: true,
};

export const PrimaryOutlineMediumEnabled = Template.bind({});
PrimaryOutlineMediumEnabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.OUTLINE,
  size: buttonSizes.MD,
  children: `Button`,
};

export const PrimaryOutlineMediumDisabled = Template.bind({});
PrimaryOutlineMediumDisabled.args = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.OUTLINE,
  size: buttonSizes.MD,
  children: `Button`,
  disabled: true,
};

export const SecondarySolidSmallEnabled = Template.bind({});
SecondarySolidSmallEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.SM,
  children: `Button`,
};

export const SecondarySolidSmallDisabled = Template.bind({});
SecondarySolidSmallDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.SM,
  children: `Button`,
  disabled: true,
};

export const SecondarySolidMediumEnabled = Template.bind({});
SecondarySolidMediumEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.MD,
  children: `Button`,
};

export const SecondarySolidMediumDisabled = Template.bind({});
SecondarySolidMediumDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.MD,
  children: `Button`,
  disabled: true,
};

export const SecondarySolidLargeEnabled = Template.bind({});
SecondarySolidLargeEnabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.LG,
  children: `Button`,
};

export const SecondarySolidLargeDisabled = Template.bind({});
SecondarySolidLargeDisabled.args = {
  color: buttonColors.SECONDARY,
  size: buttonSizes.LG,
  children: `Button`,
  disabled: true,
};
