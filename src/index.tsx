import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose, AnyAction } from "redux";
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import AppContainer from './containers/App/AppContainer';
import * as serviceWorker from './serviceWorker';
import * as reducers from './redux';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
	interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const history = createBrowserHistory();
const appReducer = combineReducers({ ...reducers, router: connectRouter(history) } as any);
const rootReducer = (state: any, action: AnyAction) => {
    return appReducer(state, action);
};
const historyMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, historyMiddleware))
);

ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<>
					<AppContainer />
				</>
			</ConnectedRouter>
		</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
