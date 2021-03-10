
import React from 'react';
import { MemoryRouter } from "react-router";
import Navigator from './Navigator';

export default {
  component: Navigator,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)], //Wrapping the story inside the router
  title: 'Navigator',
};
const Template = args => <Navigator {...args} />;


export const Default = Template.bind({});
Default.args = {
  Navigator: {
    id: '1',
    title: 'Navigator signed out',
    state: 'LOGGED_OUT',
    updatedAt: new Date(2021, 2, 23, 3, 7),
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  Navigator: {
    ...Default.args.task,
    state: 'LOGGED_OUT',
  },
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  Navigator: {
    id: '1',
    title: 'Navigator signed out',
    state: 'LOGGED_IN',
  },
};

