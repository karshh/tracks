import { combineReducers, createStore, applyMiddleware } from 'redux';
import { ApplicationState, reducers } from './';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState?: ApplicationState) {
    const rootReducer = combineReducers({
        ...reducers,
    });

    const middleware = composeWithDevTools(applyMiddleware(promise, thunk));

    return createStore(
        rootReducer,
        initialState,
        middleware
    );
}