import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Burger from './burger';
import Episodes from './episodes';
import Follow from './follow';
import Pages from './pages';

import styles, { iconStyles, languageStyles } from './styles';

import HandshakeIcon from '../../static/handshake.svg';

ReactModal.setAppElement('#___gatsby');

const hideLogoOnIntro = (navigation) => {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  // TODO: how to pass down refs?
  const intro = document.querySelector('.js-intro');

  if (!intro) {
    return;
  }

  const io = new IntersectionObserver((entries) => {
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
    isOpen: false,
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
    const { items, title, language } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navigation-container js-navigation" ref={this.navigation}>
        <style jsx>{styles}</style>

        <Burger
          isOpen={isOpen}
          language={language}
          onClick={(event) => {
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
          {languageStyles.styles}

          <nav
            className="language-switch"
            aria-label={language && language === 'en' ? 'Language' : 'Sprache'}
          >
            <Link to="/en/" className={languageStyles.className}>
              EN
            </Link>
            <Link to="/" className={languageStyles.className}>
              DE
            </Link>
          </nav>

          <span className="logo-label">
            <span className="logo-label-text">{title}</span>
            <HandshakeIcon className={iconStyles.className} />
          </span>
        </div>

        <ReactModal
          isOpen={isOpen}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="navigation">
            <ul className="navigation-list">
              <Episodes items={items} />
              <Pages
                items={[
                  {
                    node: {
                      title:
                        language && language === 'en'
                          ? 'Background'
                          : 'Hintergründe',
                      link: `${
                        language && language === 'en' ? '/en' : ''
                      }/background/`,
                    },
                  },

                  {
                    node: {
                      title:
                        language && language === 'en'
                          ? 'Protagonists'
                          : 'Protagonist*innen',
                      link: `${
                        language && language === 'en' ? '/en' : ''
                      }/protagonists/`,
                    },
                  },
                ]}
              />

              <Pages
                small
                items={[
                  {
                    node: {
                      title:
                        language && language === 'en'
                          ? 'Contact & Imprint'
                          : 'Kontakt & Impressum',
                      link: `${
                        language && language === 'en' ? '/en' : ''
                      }/background/impressum/`,
                    },
                  },

                  {
                    node: {
                      title:
                        language && language === 'en'
                          ? 'Privacy agreement'
                          : 'Datenschutz',
                      link: `${
                        language && language === 'en' ? '/en' : ''
                      }/background/datenschutz/`,
                    },
                  },
                ]}
              />

              <Follow
                title="Follow us"
                items={[
                  {
                    node: {
                      title: 'Twitter',
                      link: 'https://twitter.com/EigensinnB',
                    },
                  },

                  {
                    node: {
                      title: 'Facebook',
                      link: 'https://www.facebook.com/Bruderland/',
                    },
                  },
                ]}
              />
            </ul>
          </div>
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
          published
          quote
          number
          text
          language
        }
      }
    }
  }
`;
