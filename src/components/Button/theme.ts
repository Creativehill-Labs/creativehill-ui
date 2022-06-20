import { css } from 'styled-components';
import { ButtonProps } from './Button';
import { buttonFills, buttonSizes } from './types';

export const sizeVariants = {
  [buttonSizes.SM]: {
    fontSize: `12px`,
    padding: `4px 8px`,
  },
  [buttonSizes.MD]: {
    fontSize: `16px`,
    padding: `8px 16px`,
  },
  [buttonSizes.LG]: {
    fontSize: `22px`,
    padding: `16px 24px`,
  },
};

export const fillVariants = {
  [buttonFills.SOLID]: css<ButtonProps>`
    background-color: ${({ theme, color }) =>
      theme.palette.semantic[color].main};
    color: ${({ theme, color }) => theme.palette.semantic[color].contrastText};
  `,
  [buttonFills.OUTLINE]: css<ButtonProps>`
    border: 1px solid
      ${({ theme, color }) => theme.palette.semantic[color].main};
    color: ${({ theme, color }) => theme.palette.semantic[color].main};
  `,
  [buttonFills.CLEAR]: css<ButtonProps>`
    color: ${({ theme, color }) => theme.palette.semantic[color].main};
  `,
};
