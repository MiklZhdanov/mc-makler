import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ApplicantCard, IApplicantCardProps } from "./";
import { applicant } from "modules/applicants/constants";

export default {
  title: "molecules/ApplicantCard",
  component: ApplicantCard,
} as Meta;

const Template: Story<IApplicantCardProps> = (args) => (
  <ApplicantCard {...args} />
);

export const ApplicantCardDefault = Template.bind({});
ApplicantCardDefault.args = {
  applicant,
};
