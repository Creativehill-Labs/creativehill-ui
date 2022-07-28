import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};
