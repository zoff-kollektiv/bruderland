import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ text }) => (
  <section>
    <style jsx>{styles}</style>

    <div className="richtext">
      <Constraint>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Constraint>
    </div>
  </section>
);

export const fragment = graphql`
  fragment richtext on WordPressAcf_text {
    text
  }
`;
