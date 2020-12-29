import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { Route } from '../../types/route';
import { routes } from '../../routes';
import NavbarModalComponent from './NavbarModal';

const NavbarComponent = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const openModal = () => {
    setNavOpen(true);
  };

  const closeModal = () => {
    setNavOpen(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom border-primary">
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
        <ul className="navbar-nav mr-auto">
          <NavbarLink to='/' label='Home' activeOnlyWhenExact={true} />
          <NavbarLink to='/login' label='Login' activeOnlyWhenExact={true} />
        </ul>
      </div>
      <NavbarModalComponent isNavOpen={isNavOpen} closeModal={closeModal} />
    </nav>
  );
};

export default NavbarComponent;
