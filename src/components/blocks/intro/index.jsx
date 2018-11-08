import { graphql } from 'gatsby';
import React from 'react';

import HandshakeIcon from '../../../static/logo-handshake.svg';
import styles from './styles';

export default ({ quote, text, number, title }) => (
  <header>
    <style jsx>{styles}</style>
    <div className="quote-container">
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

    <h1 className="title">
      Episode {number} – {title}
    </h1>

    <p className="text">{text}</p>
  </header>
);

export const fragment = graphql`
  fragment intro on acf_6 {
    quote
    number
    text
  }
`;
