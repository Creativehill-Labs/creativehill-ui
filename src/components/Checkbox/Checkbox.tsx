import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconCheck } from '../..';
import {
  CheckboxColor,
  checkboxColors,
  CheckboxSize,
  checkboxSizes,
} from './types';

const CheckboxInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const CheckIconWrapper = styled.div<CheckboxProps>`
  border-radius: 4px;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color }) =>
    color && theme.palette.semantic[color].main};
  color: ${({ theme, color }) =>
    color && theme.palette.semantic[color].contrastText};

  > svg {
    display: block;
    visibility: hidden;
    width: 1em;
    height: 1em;
  }
`;

const CheckboxContainer = styled.div<CheckboxProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 8px;

  input:checked + ${CheckIconWrapper} {
    background-color: ${({ theme, color }) =>
      color && theme.palette.semantic[color].main};

    > svg {
      visibility: visible;
    }
  }
`;

export interface CheckboxProps {
  color?: CheckboxColor;
  size?: CheckboxSize;
}

export interface CheckboxElementProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>,
    CheckboxProps {}

const Checkbox = styled(
  forwardRef<
    HTMLInputElement,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> &
      CheckboxProps
  >(({ className, color, size, ...props }, ref) => {
    return (
      <CheckboxContainer className={className} color={color}>
        <CheckboxInput ref={ref} {...props} />
        <CheckIconWrapper size={size} color={color}>
          <IconCheck />
        </CheckIconWrapper>
      </CheckboxContainer>
    );
  }),
)``;

Checkbox.defaultProps = {
  type: `checkbox`,
  size: checkboxSizes.MD,
  color: checkboxColors.PRIMARY,
};

export default Checkbox;
