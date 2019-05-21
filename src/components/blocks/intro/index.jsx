import Link from 'gatsby-link';
import React, { useRef } from 'react';

import ChevronDown from '../../../static/chevron-down.svg';
import Constraint from '../../constraint';
import HandshakeIcon from '../../../static/logo-handshake.svg';
import Richtext from '../richtext';
import styles, { nextLink, logoIcon, arrowIcon, logoLink } from './styles';

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
      {logoLink.styles}

      {renderQuote && (
        <>
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
              <Link to="/" className={logoLink.className}>
                <HandshakeIcon className={logoIcon.className} />
              </Link>
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

          {backgroundImage && backgroundImage.caption && (
            <div
              dangerouslySetInnerHTML={{ __html: backgroundImage.caption }}
              className="caption"
            />
          )}
        </>
      )}

      <div className="lower-intro">
        <Constraint size="wide">
          <h1 className="title">
            {linkTitle ? (
              <Link
                className={nextLink.className}
                to={`/episodes/${linkTitleSlug}/`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            )}
          </h1>
        </Constraint>

        <Richtext text={intro || text} />
      </div>
    </header>
  );
};
