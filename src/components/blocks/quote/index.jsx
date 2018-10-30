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

      <cite>Eine der Losungen des Zentralkomitees der SED zum 1. Mai 1989</cite>
    </blockquote>

    {text && <Richtext text={text} />}
  </section>
);

export const fragment = graphql`
  fragment quote on WordPressAcf_quote {
    quote
    text
  }
`;
