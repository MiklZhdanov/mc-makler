import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ApplicantsHeader, IApplicantsHeaderProps } from "./";
import { applicant } from "modules/applicants/constants";

export default {
  title: "organisms/ApplicantsHeader",
  component: ApplicantsHeader,
} as Meta;

const Template: Story<IApplicantsHeaderProps> = (args) => (
  <ApplicantsHeader {...args} />
);

export const ApplicantsHeaderDefault = Template.bind({});
ApplicantsHeaderDefault.args = {
  applicants: [applicant],
};
