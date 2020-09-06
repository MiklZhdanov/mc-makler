import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GoBackButton, IGoBackButtonProps } from "./";

export default {
  title: "atoms/GoBackButton",
  component: GoBackButton,
} as Meta;

const Template: Story<IGoBackButtonProps> = (args) => (
  <GoBackButton {...args} />
);

export const GoBackButtonDefault = Template.bind({});
GoBackButtonDefault.args = {
  text: "Applicants",
  link: "/applicants",
};
