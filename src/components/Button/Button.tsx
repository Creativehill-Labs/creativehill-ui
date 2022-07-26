import styled from 'styled-components';
import createTransition from '../../utils/createTransition';
import { fillVariants, sizeVariants } from './theme';
import {
  ButtonColor,
  buttonColors,
  ButtonSize,
  buttonSizes,
  ButtonVariant,
  buttonVariants,
} from './types';

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  width?: string;
}

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  transition: opacity 0.1s linear;
  cursor: pointer;
  font-weight: 500;
  transition: ${createTransition([
    `background-color`,
    `box-shadow`,
    `border-color`,
    `color`,
  ])};

  ${({ size }) => size && sizeVariants[size]}
  ${({ variant: fill }) => fill && fillVariants[fill]}
  width: ${({ width }) => width};

  :disabled {
    background-color: ${({ theme }) => theme.palette.light2.main};
    color: ${({ theme }) => theme.palette.grey2.main};
    pointer-events: none;
    cursor: default;
  }
`;

Button.defaultProps = {
  type: `button`,
  color: buttonColors.PRIMARY,
  variant: buttonVariants.FILLED,
  size: buttonSizes.MD,
};

export default Button;
