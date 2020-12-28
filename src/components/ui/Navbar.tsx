import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type Route = {
  to: string,
  label: string
};

const routes: Route[] = [
  {
    to: "/",
    label: "Home"
  },
  {
    to: "/login",
    label: "Login"
  },
  {
    to: "/register",
    label: "Register"
  },
];

const Navbar = () => {
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
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={openModal}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavbarLink to='/' label='Home' activeOnlyWhenExact={true} />
          <NavbarLink to='/login' label='Login' activeOnlyWhenExact={true} />
        </ul>
      </div>
      <Modal
        isOpen={isNavOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          },
          content: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            backgroundColor: '#0a0a0a',
            overflow: 'auto',
            borderRadius: '0px',
            outline: 'none',
            border: 'none'
          }
        }}
      >
        <div className="row justify-content-center">
          <div className="col-6">
            <h3 className="mb-3">ServerStack</h3>
            <ul className="nav flex-column">
              {routes.map((route, key) => (
                <li key={key} className="nav-item">
                  <Link to={route.to} className="nav-link" onClick={closeModal}>
                    {route.label}
                  </Link>
                </li>))}
            </ul>
          </div>
          <div className="col-1">
            <button type="button" className="close text-white" aria-label="Close" onClick={() => { closeModal() }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
