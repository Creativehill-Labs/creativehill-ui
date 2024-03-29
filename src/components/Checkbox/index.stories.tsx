import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';

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

export const WithLabel: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => (
  <FormControlLabel
    control={<Checkbox disabled={disabled} />}
    label="체크박스 내용을 입력해주세요."
    {...props}
  />
);
WithLabel.args = {
  disabled: false,
};
