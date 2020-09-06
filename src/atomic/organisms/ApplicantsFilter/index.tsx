import React, { useState, useEffect } from "react";
import { styled } from "config/theme";
import { media } from "config/mixins";
import { Input } from "atomic/atoms/Input";
import { ReactComponent as Search } from "icons/search.svg";
import { Select } from "atomic/atoms/Select";
import { applicantStatuses } from "modules/applicants/constants";
import { ApplicantFilterType } from "modules/applicants/types";

export interface IApplicantsFilterProps {
  className?: string;
  onChange(data: ApplicantFilterType): void;
  defaultFilter?: ApplicantFilterType;
}

const bidOptions = [
  { value: true, label: "With Bid" },
  { value: false, label: "No Bid" },
];

const statusOptions = Object.keys(applicantStatuses).map((statusKey) => ({
  value: statusKey,
  label: applicantStatuses[statusKey],
}));

const ApplicantsFilterComponent: React.FunctionComponent<IApplicantsFilterProps> = ({
  className,
  onChange,
  defaultFilter = {},
}) => {
  const [filter, setFilter] = useState(defaultFilter);
  useEffect(() => {
    onChange(filter);
    // eslint-disable-next-line
  }, [filter]);
  return (
    <div className={className}>
      <div className="filter-item filter-item__search">
        <Input
          defaultValue={filter?.search}
          name="search"
          icon={<Search />}
          onChange={(e) => {
            setFilter({ ...filter, search: e.currentTarget.value });
          }}
          placeholder="Search for applicant"
        />
      </div>
      <div className="filter-item">
        <Select
          name="bid"
          defaultValue={filter?.bid}
          options={bidOptions}
          placeholder="Bids"
          onChange={(data) => {
            setFilter({ ...filter, bid: data });
          }}
        />
      </div>
      <div className="filter-item">
        <Select
          name="status"
          defaultValue={filter?.status}
          options={statusOptions}
          placeholder="Status"
          onChange={(data) => {
            setFilter({ ...filter, status: data });
          }}
        />
      </div>
    </div>
  );
};

export const ApplicantsFilter = styled(ApplicantsFilterComponent)`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${media.tablet`
    margin-bottom: 16px;
 `}

  .filter-item {
    margin: 0 24px 16px 0;

    &__search {
      width: 100%;
      margin: 0 0px 16px 0;

      ${media.tablet`
        margin: 0 24px 16px 0;
        width: auto;
      `}
    }
  }
`;
