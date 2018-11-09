import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { Fragment } from 'react';

import HandshakeIcon from '../../../static/logo-handshake.svg';
import styles, { nextLink } from './styles';

export default ({
  backgroundImage,
  quote,
  text,
  number,
  title,
  renderQuote = true,
  linkTitle = false,
  linkTitleSlug = ''
}) => (
  <header>
    <style jsx>{styles}</style>

    {nextLink.styles}

    {renderQuote && (
      <div className="quote-container">
        <img
          src={backgroundImage.localFile.childImageSharp.fluid.src}
          srcSet={backgroundImage.localFile.childImageSharp.fluid.srcSet}
          alt={backgroundImage.alt_text}
          className="image"
        />

        <div className="logo">
          <div className="logo-title">
            Bruder
            <span className="logo-title__country">
              <HandshakeIcon />
              land
            </span>
          </div>
        </div>
        <div className="quote">
          <blockquote>{quote}</blockquote>
        </div>
      </div>
    )}

    <h1 className="title">
      {linkTitle ? (
        <Link className={nextLink.className} to={`/episodes/${linkTitleSlug}/`}>
          Episode {number} – {title}
        </Link>
      ) : (
        <Fragment>
          Episode {number} – {title}
        </Fragment>
      )}
    </h1>

    <p className="text">{text}</p>
  </header>
);

export const fragment = graphql`
  fragment intro on acf_6 {
    quote
    number
    text
    backgroundImage {
      localFile {
        childImageSharp {
          fluid(maxWidth: 3000) {
            src
            srcSet
          }
        }
      }
    }
  }
`;
