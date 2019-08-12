import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header id="Header">
    <div className="row">
      <div className="col-3">
        <div className="header-menu">
          <Link to="/">Users</Link>
        </div>
      </div>
      <div className="col-3">
        <div className="header-menu">
          <Link to="/messages">Messages</Link>
        </div>
      </div>
      <div className="col-3">
        <div className="header-menu">
          <Link to="/relations">Relations</Link>
        </div>
      </div>
      <div className="col-3">
        <div className="header-menu">
          <Link to="/mypage">MyPage</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
