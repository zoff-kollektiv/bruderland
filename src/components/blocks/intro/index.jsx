import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { Fragment } from 'react';

import HandshakeIcon from '../../../static/logo-handshake.svg';
import styles, { nextLink, logoIcon } from './styles';

export default ({
  backgroundImage,
  quote,
  text,
  number,
  topic,
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
          {logoIcon.styles}
          <HandshakeIcon className={logoIcon.className} />
        </div>
        <div className="quote">
          <blockquote>{quote}</blockquote>
        </div>
      </div>
    )}

    <h1 className="title">
      {linkTitle ? (
        <Link className={nextLink.className} to={`/episodes/${linkTitleSlug}/`}>
          Episode {number} – {topic}
        </Link>
      ) : (
        <Fragment>
          Episode {number} – {topic}
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
    topic
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
