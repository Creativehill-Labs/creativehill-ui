import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import createCuiTheme from '../src/utils/createCuiTheme';
import ResetCSS from '../src/utils/ResetCSS';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background)$/i,
      date: /Date$/,
    },
  },
}

// Theme
addDecorator((Story) => <>
  <ResetCSS />
  <Story />
</>)
addDecorator(withThemesProvider([createCuiTheme({})]), ThemeProvider);