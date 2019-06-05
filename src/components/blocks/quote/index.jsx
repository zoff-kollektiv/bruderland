import { graphql } from 'gatsby';
import React from 'react';

import Richtext from '../richtext';
import styles from './styles';

export default ({ quote, text }) => (
  <section>
    <style jsx>{styles}</style>

    <blockquote className="quote">
      <p className="text">
        <span className="quotation-mark">»</span>
        {quote}
      </p>
    </blockquote>

    {text && (
      <div className="richtext">
        <Richtext text={text} />
      </div>
    )}
  </section>
);

export const fragment = graphql`
  fragment quote on WordPressAcf_quote {
    quote
    text
  }
`;
