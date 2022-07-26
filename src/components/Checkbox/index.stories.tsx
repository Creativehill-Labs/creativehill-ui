import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { checkboxColors } from './types';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: checkboxColors.PRIMARY,
};
