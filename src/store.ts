import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers, { IRootState } from 'src/reducers';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {ShowsActionTypes} from 'src/types/shows.types';

export type Actions = ShowsActionTypes;

const middleware = applyMiddleware(thunk as ThunkMiddleware<IRootState, Actions>);

// mount it on the Store
export const store = createStore(
    reducers,
    composeWithDevTools(
        middleware,
        // other store enhancers if any
    ),
);

export default store;
