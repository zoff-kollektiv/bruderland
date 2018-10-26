import React from 'react';

export default ({ text }) => <div className="text" dangerouslySetInnerHTML={{ __html: text }} />

export const fragment = graphql`
  fragment richtext on WordPressAcf_text {
    text
  }
`;
