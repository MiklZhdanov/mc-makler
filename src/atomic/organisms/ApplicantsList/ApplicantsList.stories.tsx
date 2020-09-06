import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ApplicantsList, IApplicantsListProps } from "./";
import { applicant } from "modules/applicants/constants";

export default {
  title: "organisms/ApplicantsList",
  component: ApplicantsList,
} as Meta;

const Template: Story<IApplicantsListProps> = (args) => (
  <ApplicantsList {...args} />
);

export const ApplicantsListDefault = Template.bind({});
ApplicantsListDefault.args = {
  applicants: [applicant],
  title: "set",
};
