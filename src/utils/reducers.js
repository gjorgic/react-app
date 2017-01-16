import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


export const makeRootReducer = (asyncReducers) => ({
	return combineReducers({
	    ...asyncReducers,
	    routing: routerReducer
	  })
})

export const injectReducer = (store, {key, reducer}) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer;