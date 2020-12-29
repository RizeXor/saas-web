import React from 'react';
import Modal from 'react-modal';
import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';

Modal.setAppElement('#root');

type NavbarModalComponentProps = {
  isNavOpen: boolean,
  closeModal: any,
};

const NavbarModalComponent: React.FC<NavbarModalComponentProps> = ({ closeModal, isNavOpen }) => {
  return (
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
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-primary">ServerStack</h3>
        <hr className="w-50" />
        <ul className="navbar-modal-ul d-flex flex-column align-items-center">
          {routes.map((route, key) => (
            <li key={key} className="my-1">
              <NavLink to={route.to} activeClassName="active" className="navbar-modal-link" onClick={closeModal}>
                {route.label}
              </NavLink>
            </li>))}
        </ul>
        <button type="button" className="close text-white-50" aria-label="Close" onClick={() => { closeModal() }}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </Modal>
  );
};

export default NavbarModalComponent;
