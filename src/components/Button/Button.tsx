import styled from 'styled-components';
import { fillVariants, sizeVariants } from './theme';
import {
  ButtonColor,
  buttonColors,
  ButtonSize,
  buttonSizes,
  ButtonFill,
  buttonFills,
} from './types';

export interface ButtonProps {
  fill?: ButtonFill;
  color: ButtonColor;
  size?: ButtonSize;
}

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  transition: opacity 0.1s linear;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
  ${({ size }) => size && sizeVariants[size]}
  ${({ fill }) => fill && fillVariants[fill]}
`;

Button.defaultProps = {
  color: buttonColors.PRIMARY,
  fill: buttonFills.SOLID,
  size: buttonSizes.MD,
};

export default Button;
