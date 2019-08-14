import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../../reducers';
import { fetchUsers } from '../../actions/users';

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
});

const mapDispatchProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchUsers: fetchUsers.action,
    },
    dispatch,
  );

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchProps>;

type Props = StateProps & DispatchProps;

const UserListContainer: React.FC<Props> = ({ fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return <h1>UserListContainer</h1>;
};

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(UserListContainer);
