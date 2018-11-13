import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ text }) => (
  <section>
    <style jsx>{styles}</style>

    <Constraint>
      <h3 className="title">Anmerkungen</h3>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    </Constraint>
  </section>
);

export const fragment = graphql`
  fragment annotations on WordPressAcf_annotations {
    text
  }
`;
