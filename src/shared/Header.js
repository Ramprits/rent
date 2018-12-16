import React from "react";
import {Link} from 'react-router-dom';


const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="http://google.com">
            Book With Me
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/rentalList">
                  Rental
                </Link>
              </li>


              <li className="nav-item active">
                <a className="nav-link" href="https://google.com">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
