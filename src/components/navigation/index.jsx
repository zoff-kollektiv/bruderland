import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Burger from './burger';
import Episodes from './episodes';
import styles, { iconStyles } from './styles';

import HandshakeIcon from '../../static/handshake.svg';

export default class Navigation extends Component {
  state = {
    isOpen: false
  };

  openNavigation() {
    this.setState({ isOpen: true });
  }

  closeNavigation() {
    this.setState({ isOpen: false });
  }

  render() {
    const { items } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navigation-container">
        <style jsx>{styles}</style>

        <Burger
          onClick={event => {
            event.preventDefault();
            this.openNavigation();
          }}
        />

        <div className="logo">
          {iconStyles.styles}
          <HandshakeIcon className={iconStyles.className} />
        </div>

        <ReactModal
          isOpen={isOpen}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="navigation">
            <button
              type="button"
              onClick={() => {
                this.closeNavigation();
              }}
            >
              Close Menu
            </button>

            <Episodes items={items} />
          </div>
        </ReactModal>
      </nav>
    );
  }
}
