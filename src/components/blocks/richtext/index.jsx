import { graphql } from 'gatsby';
import React from 'react';

import styles from './styles';

export default ({ text }) => (
  <section>
    <style jsx>{styles}</style>

    {/* eslint-disable-next-line react/no-danger */}
    <div className="richtext" dangerouslySetInnerHTML={{ __html: text }} />
  </section>
);

export const fragment = graphql`
  fragment richtext on WordPressAcf_text {
    text
  }
`;
