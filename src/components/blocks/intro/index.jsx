import { graphql } from 'gatsby';
import React from 'react';

import styles from './styles';

export default ({ quote }) => (
  <header>
    <style jsx>{styles}</style>
    <div className="logo"></div>
    <div className="quote">
      <blockquote>{quote}</blockquote>
    </div>
  </header>
);

export const fragment = graphql`
  fragment intro on acf_6 {
    quote
  }
`;
