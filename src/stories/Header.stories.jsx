import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    'name': 'test'
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
