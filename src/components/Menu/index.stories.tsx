import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './Menu';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import Paper from '../Paper/Paper';
import Button from '../Button/Button';

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {
    ...hideUnnecessaryControls(),
    anchorEl: {
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: `grey`,
    },
  },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Menu> = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Button onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}>
        열기
      </Button>
      <Menu anchorEl={anchorEl} open={open} {...props}>
        <MenuItem>옵션1</MenuItem>
        <MenuItem>옵션2</MenuItem>
        <MenuItem>옵션3</MenuItem>
      </Menu>
    </>
  );
};

export const List: ComponentStory<typeof MenuList> = ({ ...props }) => (
  <Paper width={160}>
    <MenuList {...props}>
      <MenuItem>옵션1</MenuItem>
      <MenuItem>옵션2</MenuItem>
      <MenuItem>옵션3</MenuItem>
    </MenuList>
  </Paper>
);
