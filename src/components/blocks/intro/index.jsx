import Link from 'gatsby-link';
import React, { Fragment, useRef } from 'react';

import ChevronDown from '../../../static/chevron-down.svg';
import Constraint from '../../constraint';
import HandshakeIcon from '../../../static/logo-handshake.svg';
import styles, { nextLink, logoIcon, arrowIcon } from './styles';

const skipIntro = el => {
  const { offsetHeight } = el;

  window.scrollBy({ top: offsetHeight, left: 0, behavior: 'smooth' });
};

export default ({
  backgroundImage,
  quote,
  text,
  intro,
  renderQuote = true,
  linkTitle = false,
  linkTitleSlug = '',
  title
}) => {
  const introRef = useRef(null);

  return (
    <header className="js-intro">
      <style jsx>{styles}</style>

      {nextLink.styles}

      {renderQuote && (
        <div className="quote-container" ref={introRef}>
          {backgroundImage.localFile && (
            <img
              src={backgroundImage.localFile.childImageSharp.fluid.src}
              srcSet={backgroundImage.localFile.childImageSharp.fluid.srcSet}
              alt={backgroundImage.alt_text}
              className="image"
            />
          )}

          <div className="logo">
            {logoIcon.styles}
            <HandshakeIcon className={logoIcon.className} />
          </div>

          <div className="quote">
            <blockquote>{quote}</blockquote>

            {arrowIcon.styles}

            <ChevronDown
              className={arrowIcon.className}
              onClick={() => skipIntro(introRef.current)}
            />
          </div>
        </div>
      )}

      <div className="lower-intro">
        <Constraint size="wide">
          <h1 className="title">
            {linkTitle ? (
              <Link
                className={nextLink.className}
                to={`/episodes/${linkTitleSlug}/`}
              >
                {title}
              </Link>
            ) : (
              <Fragment>{title}</Fragment>
            )}
          </h1>

          <p className="text">{intro || text}</p>
        </Constraint>
      </div>
    </header>
  );
};
