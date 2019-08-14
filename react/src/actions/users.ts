import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { User } from '../interfaces/users';
import { FETCH_USERS } from './actionTypes';

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory(actionCreator);

interface FetchUsersParams {
  page?: number;
}

interface FetchUsersResult {
  users: User[];
}

export const fetchUsers = asyncActionCreator<FetchUsersParams, FetchUsersResult>(FETCH_USERS, () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ users: [{ id: 1 }] }), 2000);
  });
});
