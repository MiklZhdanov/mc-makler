import { ApplicantType, ApplicantFilterType } from "./types";

export const filterApplicants = (
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
