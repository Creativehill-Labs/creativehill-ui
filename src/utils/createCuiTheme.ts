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
  basic: {
    grey: PaletteBasicColor;
  };
  semantic: {
    primary: PaletteSemanticColor;
    secondary: PaletteSemanticColor;
    success: PaletteSemanticColor;
    danger: PaletteSemanticColor;
    warning: PaletteSemanticColor;
    info: PaletteSemanticColor;
    dark1: PaletteSemanticColor;
    light2: PaletteSemanticColor;
  };
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
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256],
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1200,
    ...overrides.breakpoints,
  },
  palette: {
    basic: {
      grey: {
        100: `#f5f5f5`,
        200: `#eeeeee`,
        300: `#e0e0e0`,
        400: `#bdbdbd`,
        500: `#9e9e9e`,
        600: `#757575`,
        700: `#616161`,
        800: `#424242`,
        900: `#212121`,
      },
    },
    semantic: {
      primary: {
        main: `#003187`,
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
        main: `#616161`,
        contrastText: `#fff`,
      },
      light2: {
        main: `#E2E2E2`,
        contrastText: `#000`,
      },
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
