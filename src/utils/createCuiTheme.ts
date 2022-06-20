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
  };
}

interface TypographyConfig {
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  h6: CSSObject;
  p1: CSSObject;
  p2: CSSObject;
  caption: CSSObject;
}

export interface CuiTheme {
  breakpoints: BreakpointConfig;
  palette: PaletteConfig;
  typography: TypographyConfig;
  fontFamily: string;
}

const createCuiTheme = (overrides: Partial<CuiTheme>): CuiTheme => ({
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
        main: `#1976d2`,
        contrastText: `#fff`,
      },
      secondary: {
        main: `#9c27b0`,
        contrastText: `#fff`,
      },
      danger: {
        main: `#d32f2f`,
        contrastText: `#fff`,
      },
      success: {
        main: `#2e7d32`,
        contrastText: `#fff`,
      },
      info: {
        main: `#0288d1`,
        contrastText: `#fff`,
      },
      warning: {
        main: `#ed6c02`,
        contrastText: `#fff`,
      },
    },
    ...overrides.palette,
  },
  fontFamily: `inherit`,
  typography: {
    h1: {
      fontSize: `6rem`,
    },
    h2: {
      fontSize: `3.75rem`,
    },
    h3: {
      fontSize: `3rem`,
    },
    h4: {
      fontSize: `2.125rem`,
    },
    h5: {
      fontSize: `1.5rem`,
    },
    h6: {
      fontSize: `1.25rem`,
    },
    p1: {
      fontSize: `1rem`,
    },
    p2: {
      fontSize: `0.875rem`,
    },
    caption: {
      fontSize: `0.75rem`,
    },
    ...overrides.typography,
  },
});

export default createCuiTheme;
