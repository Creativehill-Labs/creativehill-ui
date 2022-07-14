import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps extends SpaceProps, LayoutProps, FlexboxProps {}

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
`;

export default Box;
