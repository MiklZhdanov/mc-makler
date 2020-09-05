import { CallApi } from 'modules/callApiSaga';
import { ApplicantsActionTypes } from './types';
import { api } from 'modules/api/api';

const { callApiAction } = CallApi;

export const getApplicants = () =>
  callApiAction({
    api: () => api.applicants.getApplicants(),
    types: [
        ApplicantsActionTypes.GET_APPLICANTS_REQUEST,
        ApplicantsActionTypes.GET_APPLICANTS_SUCCESS,
        ApplicantsActionTypes.GET_APPLICANTS_FAILURE
    ]
});