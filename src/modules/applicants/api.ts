import { request } from 'modules/api/request';

export const applicants = {
  getApplicants: async () =>
    await request.get(`/applicants`)
};
