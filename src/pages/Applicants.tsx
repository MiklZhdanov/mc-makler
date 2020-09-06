import * as React from "react";
import { useSelector } from "react-redux";
import { styled } from "config/theme";
import { AppState } from "store";
import { ApplicantsListGroups } from "atomic/organisms/ApplicantsListGroups";
import { ApplicantsHeader } from "atomic/organisms/ApplicantsHeader";

interface IApplicantsPageProps {
  className?: string;
}

const ApplicantsPageComponent: React.FunctionComponent<IApplicantsPageProps> = ({
  className,
}) => {
  const { applicants } = useSelector((state: AppState) => ({
    applicants: state.applicants.items,
    loading: state.applicants.loading,
  }));
  return (
    <div className={className}>
      <ApplicantsHeader applicants={applicants} />
      <ApplicantsListGroups applicants={applicants} />
    </div>
  );
};

export const ApplicantsPage = styled(ApplicantsPageComponent)``;
