import type { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-styling";

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../src/app/globals.css";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
