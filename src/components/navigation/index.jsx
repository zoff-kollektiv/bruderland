import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Burger from './burger';
import Episodes from './episodes';
import styles, { iconStyles } from './styles';

import HandshakeIcon from '../../static/handshake.svg';

const hideLogoOnIntro = () => {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  const navigation = document.querySelector('.js-navigation');
  const intro = document.querySelector('.js-intro');

  const io = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting }) => {
      navigation.classList.toggle(
        'navigation-container--intro-not-visible',
        !isIntersecting
      );
    });
  });

  io.observe(intro);
};

export default class Navigation extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    hideLogoOnIntro();
  }

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
      <nav className="navigation-container js-navigation">
        <style jsx>{styles}</style>

        <Burger
          onClick={event => {
            event.preventDefault();
            this.openNavigation();
          }}
        />

        <div className="logo js-logo">
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
