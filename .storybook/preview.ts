import type { Preview } from "@storybook/react";
import "../src/style/main.scss";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [
        {
          name: "Light",
          value: "#FFFFFF",
        },
        {
          name: "Dark",
          value: "#1A1B1E",
        },
      ],
    },
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
