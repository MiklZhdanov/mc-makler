import React, { useMemo } from "react";
import { styled } from "config/theme";
import { ApplicantType } from "modules/applicants/types";
import { ApplicantsList } from "../ApplicantsList";

export interface IApplicantsListGroupsProps {
  className?: string;
  applicants: ApplicantType[];
}

const getApplicantsGroupsByStatus = (
  applicants: ApplicantType[]
): {
  [key: string]: ApplicantType[];
} => {
  const applicantsGroups: any = {};
  applicants.forEach((applicant) => {
    if (applicantsGroups[applicant.status]) {
      applicantsGroups[applicant.status].push(applicant);
    } else {
      applicantsGroups[applicant.status] = [applicant];
    }
  });
  return applicantsGroups;
};

const ApplicantsListGroupsComponent: React.FunctionComponent<IApplicantsListGroupsProps> = ({
  className,
  applicants,
}) => {
  const applicantsGroups = useMemo(
    () => getApplicantsGroupsByStatus(applicants),
    [applicants]
  );

  return (
    <div className={className}>
      {Object.keys(applicantsGroups).map((key: any) => (
        <ApplicantsList title={key} applicants={applicantsGroups[key]} />
      ))}
    </div>
  );
};

export const ApplicantsListGroups = styled(ApplicantsListGroupsComponent)``;
