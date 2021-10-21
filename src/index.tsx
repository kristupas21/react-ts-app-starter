import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ReactBusContext } from 'react-bus-ts';
import 'styles/index.scss';
import App from 'containers/App';
import history from 'state/history';
import store from 'state/store';
import { BreakpointsContextProvider } from 'context/Breakpoints';
import bus from 'utils/bus';
import { Emitter } from 'mitt';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactBusContext.Provider value={bus as Emitter}>
        <BreakpointsContextProvider>
          <App />
        </BreakpointsContextProvider>
      </ReactBusContext.Provider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
