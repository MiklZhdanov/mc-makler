import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Status, IStatusProps } from "./";

export default {
  title: "atoms/Status",
  component: Status,
} as Meta;

const Template: Story<IStatusProps> = (args) => <Status {...args} />;

export const StatusDefault = Template.bind({});
StatusDefault.args = {
  text: "Applicants",
  bgColor: "red",
  color: "white",
};
