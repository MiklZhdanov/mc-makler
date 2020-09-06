import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Statistics, IStatisticsProps } from "./";

const data = [
  {
    value: "25",
    label: "Total",
  },
  {
    value: "10",
    label: "New",
  },
  {
    value: "5",
    label: "Viewed",
  },
  {
    value: "3",
    label: "Appointment",
  },
  {
    value: "6",
    label: "Others",
  },
];

export default {
  title: "molecules/Statistics",
  component: Statistics,
} as Meta;

const Template: Story<IStatisticsProps> = (args) => <Statistics {...args} />;

export const StatisticsDefault = Template.bind({});
StatisticsDefault.args = {
  data,
};
