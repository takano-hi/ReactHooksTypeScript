import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserListContainer from '../containers/users/UserListContainer';
import UserDetailContainer from '../containers/users/UserDetailContainer';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={UserListContainer} />
    <Route path="/users/:userId" component={UserDetailContainer} />
  </BrowserRouter>
);

export default Routes;
