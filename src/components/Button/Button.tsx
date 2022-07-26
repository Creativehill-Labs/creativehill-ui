import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import createTransition from '../../utils/createTransition';
import { variants, iconSizeVariants, sizeVariants } from './theme';
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
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const ButtonBase = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: opacity 0.1s linear;
  cursor: pointer;
  font-weight: 500;
  vertical-align: middle;
  transition: ${createTransition([
    `background-color`,
    `box-shadow`,
    `border-color`,
    `color`,
  ])};

  ${({ size }) => size && sizeVariants[size]}
  ${({ variant }) => variant && variants[variant]}
  width: ${({ fullWidth }) => fullWidth && `100%`};

  :disabled {
    background-color: ${({ theme }) => theme.palette.light2.main};
    color: ${({ theme }) => theme.palette.grey2.main};
    pointer-events: none;
    cursor: default;
  }
`;

const IconLeftWrapper = styled.span<{ size?: ButtonSize }>`
  display: inherit;
  margin-right: 8px;
  ${({ size }) => size && iconSizeVariants[size]}
`;
const IconRightWrapper = styled.span<{ size?: ButtonSize }>`
  display: inherit;
  margin-left: 8px;
  ${({ size }) => size && iconSizeVariants[size]}
`;

const Button: FC<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & ButtonProps
> = ({ children, iconLeft, iconRight, size, ...props }) => {
  const wrappedIconLeft = iconLeft && (
    <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>
  );

  const wrappedIconRight = iconRight && (
    <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>
  );

  return (
    <ButtonBase size={size} {...props}>
      {wrappedIconLeft}
      {children}
      {wrappedIconRight}
    </ButtonBase>
  );
};

Button.defaultProps = {
  color: buttonColors.PRIMARY,
  variant: buttonVariants.FILLED,
  size: buttonSizes.MD,
};

export default Button;
