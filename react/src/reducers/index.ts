import users, { UserState } from './users';
import { combineReducers, createStore, AnyAction, applyMiddleware } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

export interface RootState {
  users: UserState;
}

const reducer = combineReducers<RootState>({
  users,
});

const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
