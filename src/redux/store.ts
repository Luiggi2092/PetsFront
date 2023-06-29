import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import counterReducer from './reducer';




const store = createStore(counterReducer, applyMiddleware(ThunkMiddleware));

export default store;