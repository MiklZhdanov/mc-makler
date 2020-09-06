import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Select, SelectProps } from "./";

export default {
  title: "atoms/Select",
  component: Select,
} as Meta;

//@ts-ignore
const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const SelectDefault = Template.bind({});
SelectDefault.args = {};
