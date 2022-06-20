import { ValueOf } from '../../utils/tsHelper';

export const buttonFills = {
  SOLID: `solid`,
  OUTLINE: `outline`,
  CLEAR: `clear`,
} as const;

export type ButtonFill = ValueOf<typeof buttonFills>;

export const buttonColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type ButtonColor = ValueOf<typeof buttonColors>;

export const buttonSizes = {
  SM: `sm`,
  MD: `md`,
  LG: `lg`,
} as const;

export type ButtonSize = ValueOf<typeof buttonSizes>;
