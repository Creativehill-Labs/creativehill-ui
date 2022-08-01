import { ValueOf } from '../../utils/tsHelper';

export const selectColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type SelectColor = ValueOf<typeof selectColors>;
