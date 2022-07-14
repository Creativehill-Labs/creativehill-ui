import styled from 'styled-components';
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import { CuiTheme } from '../../utils/createCuiTheme';

export type TextColor = keyof CuiTheme['palette']['semantic'];

export interface TextProps extends SpaceProps, TypographyProps {
  variant?: keyof CuiTheme['typography'];
  color?: TextColor;
}

const Text = styled(`span`)<TextProps>`
  color: ${({ theme, color }) => color && theme.palette.semantic[color].main};
  ${space}
  ${typography}
  ${variant({
    key: `typography`,
  })}
`;

export default Text;
