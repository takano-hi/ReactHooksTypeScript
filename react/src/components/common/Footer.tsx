import React from 'react';
import classNames from 'classnames';

import * as CSSModule from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer id="footer">
    <div className="row">
      <div className="col-12">
        <p className={classNames(CSSModule.copyright, 'p-2')}>2019 (C) All rights reserved by uni-bit</p>
      </div>
    </div>
  </footer>
);

export default Footer;
