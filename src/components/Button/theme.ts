import { css } from 'styled-components';
import hexToRgb from '../../utils/hexToRgb';
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
    :hover {
      background-color: ${({ theme, color }) =>
        color && theme.palette[color].light};
    }
    :active {
      background-color: ${({ theme, color }) =>
        color && theme.palette[color].dark};
    }
  `,
  [buttonFills.OUTLINE]: css<ButtonProps>`
    border: 1px solid
      ${({ theme, color }) => color && theme.palette[color].main};
    color: ${({ theme, color }) => color && theme.palette[color].main};
    :hover {
      background-color: rgba(
        ${({ theme, color }) => color && hexToRgb(theme.palette[color].main)},
        0.1
      );
    }
    :active {
      background-color: ${({ theme, color }) =>
        color && theme.palette[color].dark};
      color: ${({ theme, color }) =>
        color && theme.palette[color].contrastText};
    }
  `,
  [buttonFills.CLEAR]: css<ButtonProps>`
    color: ${({ theme, color }) => color && theme.palette[color].main};
  `,
};
