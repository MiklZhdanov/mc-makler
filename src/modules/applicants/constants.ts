import { ApplicantType } from "./types";

export const applicantStatuses: { [key: string]: string } = {
  set: "Appointment set",
  viewed: "Property viewed",
  interested: "Interested",
  accepted: "Offer Accepted",
};

//for storybook representation
export const applicant: ApplicantType = {
  bid: 2000,
  activity_at: "2020-09-05T09:00:00.000Z",
  created_at: "2020-09-04T16:37:35.391Z",
  email: "Friedrich.heinrich@gmail.com",
  id: 1,
  logo: null,
  first_name: "Friedrich",
  last_name: "Heinrich",
  phone: "+49 146 344 23811",
  status: "viewed",
  updated_at: "2020-09-04T16:46:58.361Z",
};
