import { ApplicantsActionTypes, ApplicantsStateType } from './types';

const initialState: ApplicantsStateType = {
  loading: false,
  items: []
};

export default function(state = initialState, action: any): ApplicantsStateType {
  switch (action.type) {
    case ApplicantsActionTypes.GET_APPLICANTS_REQUEST:
      return { ...state, loading: true };
    case ApplicantsActionTypes.GET_APPLICANTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ApplicantsActionTypes.GET_APPLICANTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
