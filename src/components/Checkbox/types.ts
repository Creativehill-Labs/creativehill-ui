import { ValueOf } from '../../utils/tsHelper';

export const checkboxColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type CheckboxColor = ValueOf<typeof checkboxColors>;

export const checkboxSizes = {
  SM: `sm`,
  MD: `md`,
  LG: `lg`,
} as const;

export type CheckboxSize = ValueOf<typeof checkboxSizes>;
