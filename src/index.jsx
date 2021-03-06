import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';

var __BASENAME__ = JSON.stringify(process.env.BASENAME || '')
// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}


// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('app')

let render = (routerKey = null) => {
	const routes = require('./routes/index.js').default(store)


	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				{ /* Tell the Router to use our enhanced history */ }
				<Router history={history} children={routes} routerKey={routerKey} />
			</Provider>
		</AppContainer>,
		MOUNT_NODE
	)
}


// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
	const renderApp = render
	const renderError = (error) => {
		const RedBox = require('redbox-react')

		ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
	}

	render = () => {
		try {
			renderApp(Math.random())
		} catch (error) {
			renderError(error)
		}
	}
	module.hot.accept(['./routes/index'], () => render())
}

// ========================================================
// Go!
// ========================================================
render()