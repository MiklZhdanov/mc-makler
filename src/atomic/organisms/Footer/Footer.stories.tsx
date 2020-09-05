import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer, IFooterProps } from './';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<IFooterProps> = (args) => <><br/><br/><br/><Footer {...args} /></>;

export const FooterDefault = Template.bind({});
FooterDefault.args = {
};