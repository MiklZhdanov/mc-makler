import * as React from "react";
import { styled } from "config/theme";
import { ApplicantType } from "modules/applicants/types";
import { ApplicantCard } from "atomic/molecules/ApplicantCard";
import { media } from "config/mixins";
import { applicantStatuses } from "modules/applicants/constants";

export interface IApplicantsListProps {
  className?: string;
  title: "set" | "viewed" | "interested" | "accepted";
  applicants: ApplicantType[];
}

const ApplicantsListComponent: React.FunctionComponent<IApplicantsListProps> = ({
  className,
  applicants,
  title,
}) => {
  return (
    <div className={className}>
      <div className="applicants-list-title">
        {`${applicantStatuses[title]} (${applicants.length})`}
      </div>
      <div className="applicants-list-wrapper">
        <div className="applicants-list-slider">
          {applicants.map((applicant) => (
            <ApplicantCard
              className="applicant-card"
              key={applicant.id}
              applicant={applicant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ApplicantsList = styled(ApplicantsListComponent)`
  margin-bottom: 32px;
  .applicants-list-title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .applicants-list-wrapper {
    height: 242px;
    overflow: hidden;
    margin-right: -16px;
    ${media.tablet`
      margin-right: 0px;
      height: inherit;
      overflow: inherit;
    `}
  }

  .applicants-list-slider {
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    margin-right: -10px;
    margin-bottom: -24px;

    .applicant-card {
      flex: 0 0 305px;
      width: 305px;
      margin: 0 24px 24px 0;
    }

    ${media.tablet`
      flex-wrap: wrap;
      margin-right: -40px;
      overflow-y: inherit;
      overflow-x: inherit;
    `}
  }
`;
