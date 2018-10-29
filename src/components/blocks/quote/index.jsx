import { graphql } from 'gatsby';
import React from 'react';

import Richtext from '../richtext';

export default ({ quote, text }) => (
  <section>
    <blockquote className="quote">
      <p>{quote}</p>
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
