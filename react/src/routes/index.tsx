import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import withLoading from '../composers/withLoading';
import UserListContainer from '../containers/users/UserListContainer';

const UserDetailContainer = React.lazy(() =>
  import(/* webpackChunkName: "user-detail" */ '../containers/users/UserDetailContainer'),
);
const MessageListContainer = React.lazy(() =>
  import(/* webpackChunkName: "message-list" */ '../containers/messages/MessageListContainer'),
);
const RelationListContainer = React.lazy(() =>
  import(/* webpackChunkName: "relation-list" */ '../containers/relations/RelationListContainer'),
);
const MyPageContainer = React.lazy(() =>
  import(/* webpackChunkName: "mypage" */ '../containers/mypage/MyPageContainer'),
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={withLoading(UserListContainer)} />
    <Route path="/users/:userId" component={withLoading(UserDetailContainer)} />
    <Route path="/messages" component={withLoading(MessageListContainer)} />
    <Route path="/relations" component={withLoading(RelationListContainer)} />
    <Route path="/mypage" component={withLoading(MyPageContainer)} />
  </Switch>
);

export default Routes;
