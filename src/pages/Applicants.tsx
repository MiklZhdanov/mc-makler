import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { styled } from "config/theme";
import { AppState } from "store";
import { ApplicantsListGroups } from "atomic/organisms/ApplicantsListGroups";
import { ApplicantsHeader } from "atomic/organisms/ApplicantsHeader";
import { ApplicantsFilter } from "atomic/organisms/ApplicantsFilter";
import { ApplicantType, ApplicantFilterType } from "modules/applicants/types";
import { query } from "modules/api/utils";

interface IApplicantsPageProps {
  className?: string;
}

const filterApplicants = (
  applicants: ApplicantType[],
  filter: ApplicantFilterType
): ApplicantType[] => {
  let result: ApplicantType[] = applicants.filter((applicant) => {
    if (
      `${applicant.first_name} ${applicant.last_name} ${applicant.email}`
        .toLowerCase()
        .includes(filter?.search?.toLowerCase()?.trim() || "")
    ) {
      return true;
    }
    return false;
  });

  if (filter?.bid !== undefined) {
    result = result.filter((applicant) => !!filter.bid === !!applicant.bid);
  }

  if (filter?.status) {
    result = result.filter((applicant) => filter.status === applicant.status);
  }

  return result;
};

const ApplicantsPageComponent: React.FunctionComponent<IApplicantsPageProps> = ({
  className,
}) => {
  const { applicants, loading, error } = useSelector((state: AppState) => ({
    applicants: state.applicants.items,
    loading: state.applicants.loading,
    error: state.applicants.error,
  }));
  const [filter, setFilter] = useState({});
  const history = useHistory();
  const { search } = useLocation();
  return (
    <div className={className}>
      <ApplicantsHeader applicants={filterApplicants(applicants, filter)} />
      <ApplicantsFilter
        defaultFilter={query.parse(search, true)}
        onChange={(data) => {
          query.set(history, data);
          setFilter(data);
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ApplicantsListGroups
          applicants={filterApplicants(applicants, filter)}
        />
      )}
      {error}
    </div>
  );
};

export const ApplicantsPage = styled(ApplicantsPageComponent)``;
