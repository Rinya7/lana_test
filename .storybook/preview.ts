import type { Preview } from '@storybook/react'
import "../src/index.css";

const preview: Preview = {
    parameters: {
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
      layout: "centered", // Центрируем компоненты в Storybook
      backgrounds: {
        default: "light",
      },
    },
  };

export default preview;