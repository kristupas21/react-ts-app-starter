import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import reducers from './reducers';
import saga from './saga';
import history from './history';

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware];
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(saga);

export default store;
