import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControl from '../FormControl/FormControl';
import FormHelperText from '../FormHelperText/FormHelperText';
import Select from './Select';

export default {
  title: `Components/Select`,
  component: Select,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (props) => (
  <Select {...props}>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
    <option>옵션4</option>
  </Select>
);

export const WithLabel: ComponentStory<typeof Select> = (props) => (
  <FormControl
    control={
      <Select {...props}>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
        <option>옵션4</option>
      </Select>
    }
  >
    <FormHelperText>*Helper Text</FormHelperText>
  </FormControl>
);
