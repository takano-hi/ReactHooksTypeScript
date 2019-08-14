import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { User } from '../interfaces/users';
import { fetchUsers } from '../actions/users';

export interface UserState {
  isFetchingUsers: boolean;
  fetchingUsersError: Error | null;
  users: User[];
}

export const initialState: UserState = {
  isFetchingUsers: false,
  fetchingUsersError: null,
  users: [],
};

export default reducerWithInitialState(initialState)
  .case(fetchUsers.async.started, state => ({
    ...state,
    isFetchingUsers: true,
    fetchingUsersError: null,
  }))
  .case(fetchUsers.async.failed, (state, { error }) => ({
    ...state,
    isFetchingUsers: false,
    fetchingUsersError: error,
  }))
  .case(fetchUsers.async.done, (state, { result: { users } }) => ({
    ...state,
    isFetchingUsers: false,
    users,
  }));
