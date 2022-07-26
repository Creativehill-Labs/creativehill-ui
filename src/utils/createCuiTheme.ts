import { CSSObject } from 'styled-components';

interface BreakpointConfig {
  sm: number;
  md: number;
  lg: number;
}

interface PaletteSemanticColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText: string;
}

interface PaletteBasicColor {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface PaletteConfig {
  primary: PaletteSemanticColor;
  secondary: PaletteSemanticColor;
  success: PaletteSemanticColor;
  danger: PaletteSemanticColor;
  warning: PaletteSemanticColor;
  info: PaletteSemanticColor;
  dark1: PaletteSemanticColor;
  dark2: PaletteSemanticColor;
  dark3: PaletteSemanticColor;
  grey1: PaletteSemanticColor;
  grey2: PaletteSemanticColor;
  grey3: PaletteSemanticColor;
  light1: PaletteSemanticColor;
  light2: PaletteSemanticColor;
  light3: PaletteSemanticColor;
}

interface TypographyConfig {
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  h6: CSSObject;
  subtitle: CSSObject;
  p1: CSSObject;
  p2: CSSObject;
  caption: CSSObject;
}

export interface CuiTheme {
  space: number[];
  breakpoints: BreakpointConfig;
  palette: PaletteConfig;
  typography: TypographyConfig;
  fontFamily: string;
}

const createCuiTheme = (overrides: Partial<CuiTheme>): CuiTheme => ({
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256],
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1200,
    ...overrides.breakpoints,
  },
  palette: {
    primary: {
      main: `#003187`,
      dark: `#042153`,
      light: `#335BA0`,
      contrastText: `#fff`,
    },
    secondary: {
      main: `#9c27b0`,
      contrastText: `#fff`,
    },
    danger: {
      main: `#e32828`,
      contrastText: `#fff`,
    },
    success: {
      main: `#0d6def`,
      contrastText: `#fff`,
    },
    info: {
      main: `#3a5e8f`,
      contrastText: `#fff`,
    },
    warning: {
      main: `#f1ce17`,
      contrastText: `#fff`,
    },
    dark1: {
      main: `#626262`,
      contrastText: `#fff`,
    },
    dark2: {
      main: `#4D4B4B`,
      contrastText: `#fff`,
    },
    dark3: {
      main: `#000000`,
      contrastText: `#fff`,
    },
    grey1: {
      main: `#F0F0F0`,
      contrastText: `#000`,
    },
    grey2: {
      main: `#E2E2E2`,
      contrastText: `#000`,
    },
    grey3: {
      main: `#D4D4D4`,
      contrastText: `#000`,
    },
    light1: {
      main: `#F0F0F0`,
      contrastText: `#000`,
    },
    light2: {
      main: `#E2E2E2`,
      contrastText: `#000`,
    },
    light3: {
      main: `#D4D4D4`,
      contrastText: `#000`,
    },
    ...overrides.palette,
  },
  fontFamily: `inherit`,
  typography: {
    h1: {
      fontSize: `60px`,
    },
    h2: {
      fontSize: `48px`,
    },
    h3: {
      fontSize: `34px`,
    },
    h4: {
      fontSize: `24px`,
    },
    h5: {
      fontSize: `20px`,
    },
    h6: {
      fontSize: `18px`,
    },
    subtitle: {
      fontSize: `16px`,
    },
    p1: {
      fontSize: `16px`,
    },
    p2: {
      fontSize: `14px`,
    },
    caption: {
      fontSize: `12px`,
    },
    ...overrides.typography,
  },
});

export default createCuiTheme;
