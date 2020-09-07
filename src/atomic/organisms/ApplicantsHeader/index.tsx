import React, { useMemo } from "react";
import { styled } from "config/theme";
import { ApplicantType } from "modules/applicants/types";
import { GoBackButton } from "atomic/atoms/GoBackButton";
import { Statistics } from "atomic/molecules/Statistics";
import { media } from "config/mixins";

export interface IApplicantsHeaderProps {
  className?: string;
  applicants: ApplicantType[];
  loading?: boolean;
}

const getStatistics = (applicants: ApplicantType[]) => {
  const interested = applicants.filter(
    (applicant) => applicant.status === "interested"
  ).length;
  const viewed = applicants.filter((applicant) => applicant.status === "viewed")
    .length;
  const set = applicants.filter((applicant) => applicant.status === "set")
    .length;

  const statistics: any = [
    {
      label: "Total",
      value: applicants.length,
    },
    {
      label: "New",
      value: interested,
    },
    {
      label: "Viewed",
      value: viewed,
    },
    {
      label: "Appointment",
      value: set,
    },
    {
      label: "Others",
      value: applicants.length - interested - viewed - set,
    },
  ];

  return statistics;
};

const ApplicantsHeaderComponent: React.FunctionComponent<IApplicantsHeaderProps> = ({
  className,
  applicants,
  loading,
}) => {
  const data = useMemo(() => getStatistics(applicants), [applicants]);
  return (
    <div className={className}>
      <div className="applicants-header__title">
        <GoBackButton text="Applicants" link="/applicants" />
      </div>
      <div className="applicants-header__statistics">
        <Statistics data={data} loading={loading} />
      </div>
    </div>
  );
};

export const ApplicantsHeader = styled(ApplicantsHeaderComponent)`
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
 `}

  .applicants-header {
    &__title {
      flex-grow: 1;
      margin-bottom: 24px;

      ${media.tablet`
        margin-bottom: 20px;
      `}
    }
    &__statistics {
      display: none;

      ${media.tablet`
        margin-bottom: 20px;
        display: block;
      `}
    }
  }
`;
