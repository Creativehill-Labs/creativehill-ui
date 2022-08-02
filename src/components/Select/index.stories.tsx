import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectNative from './SelectNative';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControl from '../FormControl/FormControl';
import FormHelperText from '../FormHelperText/FormHelperText';

export default {
  title: `Components/Select`,
  component: SelectNative,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof SelectNative>;

export const Default: ComponentStory<typeof SelectNative> = (props) => (
  <SelectNative {...props}>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
    <option>옵션4</option>
  </SelectNative>
);

export const WithLabel: ComponentStory<typeof SelectNative> = (props) => (
  <FormControl
    control={
      <SelectNative {...props}>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
        <option>옵션4</option>
      </SelectNative>
    }
  >
    <FormHelperText>*Helper Text</FormHelperText>
  </FormControl>
);
