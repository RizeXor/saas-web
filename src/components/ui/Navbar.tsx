import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { guestRoutes, loggedInRoutes } from '../../routes';
import NavbarModalComponent from './NavbarModal';
import { postLogout } from '../../api/logout';
import { UserContext } from '../../context/user';

const NavbarComponent = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { user, setUser, isLoggedIn } = useContext(UserContext);

  const openModal = () => {
    setNavOpen(true);
  };

  const closeModal = () => {
    setNavOpen(false);
  };

  const logout = async () => {
    await postLogout();
    setUser({
      email: "",
      first_name: "",
      last_name: ""
    });
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md border-bottom border-primary">
      <Link className="navbar-brand" to="/">ServerStack</Link>
      <button
        className="navbar-toggler border-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={openModal}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto d-none d-md-flex">
          {isLoggedIn() ?
            loggedInRoutes.map((route, key) => <NavbarLink key={key} to={route.to} label={route.label} activeOnlyWhenExact={true} />) :
            guestRoutes.map((route, key) => <NavbarLink key={key} to={route.to} label={route.label} activeOnlyWhenExact={true} />)}
        </ul>
        {isLoggedIn() && <ul className="navbar-nav d-none d-md-flex">
          <li className="nav-item dropdown">
            <a className="dropdown-toggle nav-item nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
              {" "}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item-text">
                <div className="overflow-hidden d-flex flex-column">
                  <span>Logged in as</span>
                  <small className="text-muted">{`${user.first_name} ${user.last_name}`}</small>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/settings">
                <i className="fa fa-cog" aria-hidden="true"></i>
                {" Settings"}
              </Link>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" type="button" onClick={logout}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                {" Logout"}
              </button>
            </div>
          </li>
        </ul>}
      </div>
      <NavbarModalComponent isNavOpen={isNavOpen} closeModal={closeModal} />
    </nav>
  );
};

export default NavbarComponent;
