import { put } from 'redux-saga/effects';
import { getApplicants } from './actions';

export function* applicantsSaga() {
  yield put(getApplicants())
}