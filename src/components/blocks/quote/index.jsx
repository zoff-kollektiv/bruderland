import { graphql } from 'gatsby';
import React from 'react';

import Richtext from '../richtext';

export default ({ quote, text }) => <blockquote className="quote">
  <p>{quote}</p>

  {text && <Richtext text={text} />}
</blockquote>

export const fragment = graphql`
  fragment quote on WordPressAcf_quote {
    quote
    text
  }
`;
