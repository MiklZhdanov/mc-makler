import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import applicants from 'modules/applicants/reducer';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    applicants
  });
