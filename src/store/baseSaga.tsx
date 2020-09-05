import { fork } from 'redux-saga/effects';
import Meta from 'modules/meta';
import callApiSaga from 'modules/callApiSaga';
import { applicantsSaga } from 'modules/applicants/saga';

const { metaSaga } = Meta;
const { callApiActionSaga } = callApiSaga;


export default function* baseSaga() {
  // add all base sagas here
  yield fork(metaSaga, [callApiActionSaga]);
  yield fork(applicantsSaga);
}
