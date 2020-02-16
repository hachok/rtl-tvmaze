import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

interface IHeader {
  children: ReactNode;
  backUrl?: string;
}

const Header = ({ children, backUrl }: IHeader) => {
  return (
    <div>
      <div className="header-title">
        <h1>{children}</h1>
        {backUrl && (
          <Link className="btn btn-primary" to={backUrl}>
            Back to show
          </Link>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Header;
