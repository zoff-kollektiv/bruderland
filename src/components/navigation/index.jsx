import { graphql } from 'gatsby';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Burger from './burger';
import Episodes from './episodes';
import Pages from './pages';

import styles, { iconStyles } from './styles';

import HandshakeIcon from '../../static/handshake.svg';

ReactModal.setAppElement('#___gatsby');

const hideLogoOnIntro = navigation => {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  // TODO: how to pass down refs?
  const intro = document.querySelector('.js-intro');

  if (!intro) {
    return;
  }

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
  intro = React.createRef();

  navigation = React.createRef();

  state = {
    isOpen: false
  };

  constructor(props) {
    super(props);

    this.state.isOpen = props.isOpen;
  }

  componentDidMount() {
    hideLogoOnIntro(this.navigation.current);
  }

  openNavigation() {
    this.setState({ isOpen: true });
  }

  closeNavigation() {
    this.setState({ isOpen: false });
  }

  render() {
    const { items, topic } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navigation-container js-navigation" ref={this.navigation}>
        <style jsx>{styles}</style>

        <Burger
          isOpen={isOpen}
          onClick={event => {
            event.preventDefault();
            if (isOpen) {
              this.closeNavigation();
            } else {
              this.openNavigation();
            }
          }}
        />

        <div className="logo">
          {iconStyles.styles}
          <span className="logo-label">{topic}</span>
          <HandshakeIcon className={iconStyles.className} />
        </div>

        <ReactModal
          isOpen={isOpen}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <ul className="navigation">
            <Episodes items={items} />
            <Pages
              items={[
                {
                  node: {
                    title: 'Protagonist*innen',
                    link: '/protagonists/'
                  }
                },

                {
                  node: {
                    title: 'Länder',
                    link: '/countries/'
                  }
                }
              ]}
            />
          </ul>
        </ReactModal>
      </nav>
    );
  }
}

export const fragment = graphql`
  fragment navigationEpisodes on wordpress__wp_episodesConnection {
    edges {
      node {
        ...navigation
        title
        acf {
          quote
          number
          text
          topic
        }
      }
    }
  }
`;
