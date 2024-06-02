import '../src/index.css';
import { fn } from '@storybook/test';

export const parameters = {
  actions: { onClick: fn },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];
