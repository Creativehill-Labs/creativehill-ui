import { css } from 'styled-components';
import { ButtonProps } from './Button';
import { buttonFills, buttonSizes } from './types';

export const sizeVariants = {
  [buttonSizes.SM]: {
    fontSize: `14px`,
    fontWeight: 600,
    lineHeight: `24px`,
    padding: `7px 18px`,
  },
  [buttonSizes.MD]: {
    fontSize: `16px`,
    fontWeight: 600,
    lineHeight: `26px`,
    padding: `11px 20px`,
  },
};

export const fillVariants = {
  [buttonFills.SOLID]: css<ButtonProps>`
    background-color: ${({ theme, color }) =>
      color && theme.palette[color].main};
    color: ${({ theme, color }) => color && theme.palette[color].contrastText};
  `,
  [buttonFills.OUTLINE]: css<ButtonProps>`
    border: 1px solid
      ${({ theme, color }) => color && theme.palette[color].main};
    color: ${({ theme, color }) => color && theme.palette[color].main};
  `,
  [buttonFills.CLEAR]: css<ButtonProps>`
    color: ${({ theme, color }) => color && theme.palette[color].main};
  `,
};
