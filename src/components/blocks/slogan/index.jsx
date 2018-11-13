import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ text, source }) => (
  <section>
    <style jsx>{styles}</style>

    <blockquote>
      <Constraint>
        {text}

        {source && (
          <cite>{source}</cite>
        )}
      </Constraint>
    </blockquote>
  </section>
);

export const fragment = graphql`
  fragment slogan on WordPressAcf_slogan {
    text
    source
  }
`;
