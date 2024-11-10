import { Meta, StoryFn } from '@storybook/react';
import Page404 from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { fn } from '@storybook/test';

export default {
  title: 'Features/Page404',
  component: Page404,
  args: { onClick: fn },
} as Meta;

export const Fixture: StoryFn = (args) => (
  <Router>
    <Page404 {...args} />
  </Router>
);
