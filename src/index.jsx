import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';

import AdminLayout from './layouts/Admin'
import AdminLoginLayout from './layouts/AdminLogin'

import DashboardView from './views/Dashboard'
import ProductView from './views/Product'

const reducers = {};

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
	<AppContainer>
		<Provider store={store}>
			{ /* Tell the Router to use our enhanced history */ }
			<Router history={history}>
				<Route path="/" component={AdminLayout}>
					<Route path="/" component={DashboardView}/>
					<Route path="product" component={ProductView}/>
				</Route>
				<Route path="/login" component={AdminLoginLayout} />
			</Router>
		</Provider>
	</AppContainer>,
	document.getElementById('app')
)
