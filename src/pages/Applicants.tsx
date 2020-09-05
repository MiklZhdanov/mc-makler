import * as React from "react";
import { useSelector } from "react-redux";
import { styled } from "config/theme";
import { AppState } from "store";
import { ApplicantsListGroups } from "atomic/organisms/ApplicantsListGroups";

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
      <ApplicantsListGroups applicants={applicants} />
    </div>
  );
};

export const ApplicantsPage = styled(ApplicantsPageComponent)``;
