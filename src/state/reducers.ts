import { combineReducers } from 'redux';
import routerReducer from 'state/router/routerReducer';
import appReducer from 'state/app/appReducer';

export default combineReducers({
  app: appReducer,
  router: routerReducer,
});
