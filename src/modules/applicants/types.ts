export type ApplicantType = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  status: "set" | "viewed" | "interested" | "accepted";
  logo: string | null;
  bid?: number;
  activity_at: string;
  created_at: string;
  updated_at: string;
};

export type ApplicantsStateType = {
    items: ApplicantType[];
    loading: boolean;
} 

const moduleName = '@@applicants';

export const ApplicantsActionTypes = {
  GET_APPLICANTS_REQUEST: `${moduleName}/GET_APPLICANTS_REQUEST`,
  GET_APPLICANTS_SUCCESS: `${moduleName}/GET_APPLICANTS_SUCCESS`,
  GET_APPLICANTS_FAILURE: `${moduleName}/GET_APPLICANTS_FAILURE`,
};
