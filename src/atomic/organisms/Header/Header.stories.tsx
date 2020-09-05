import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, IHeaderProps } from './';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const HeaderDefault = Template.bind({});
HeaderDefault.args = {
};