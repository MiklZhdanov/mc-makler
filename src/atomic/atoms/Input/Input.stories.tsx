import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ReactComponent as Search } from "icons/search.svg";
import { Input, InputProps } from "./";

export default {
  title: "atoms/Input",
  component: Input,
} as Meta;

//@ts-ignore
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {};

export const InputIconed = Template.bind({});
InputIconed.args = {
  icon: <Search />,
};
