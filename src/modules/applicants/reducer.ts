import { ApplicantsActionTypes, ApplicantsStateType } from "./types";

const initialState: ApplicantsStateType = {
  loading: false,
  items: [],
  error: undefined,
};

export default function (
  state = initialState,
  action: any
): ApplicantsStateType {
  switch (action.type) {
    case ApplicantsActionTypes.GET_APPLICANTS_REQUEST:
      return { ...state, loading: true, error: initialState.error };
    case ApplicantsActionTypes.GET_APPLICANTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ApplicantsActionTypes.GET_APPLICANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.payload?.error || "Something bad happend",
      };
    default:
      return state;
  }
}
