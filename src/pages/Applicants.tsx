import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { styled } from "config/theme";
import { AppState } from "store";
import { ApplicantsListGroups } from "atomic/organisms/ApplicantsListGroups";
import { ApplicantsHeader } from "atomic/organisms/ApplicantsHeader";
import { ApplicantsFilter } from "atomic/organisms/ApplicantsFilter";
import { query } from "modules/api/utils";
import { filterApplicants } from "modules/applicants/utils";

interface IApplicantsPageProps {
  className?: string;
}

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
  const filteredApplicants = useMemo(
    () => filterApplicants(applicants, filter),
    [applicants, filter]
  );
  return (
    <div className={className}>
      <ApplicantsHeader applicants={filteredApplicants} loading={loading} />
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
        <ApplicantsListGroups applicants={filteredApplicants} />
      )}
      {error}
    </div>
  );
};

export const ApplicantsPage = styled(ApplicantsPageComponent)``;
