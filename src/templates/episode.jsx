import React from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';

export default ({ data }) => {
  const { allWordpressWpEpisodes } = data;
  const { edges } = allWordpressWpEpisodes;
  const { node } = edges[0];

  return <Episode data={node} />;
};

export const query = graphql`
  query($number: String) {
    allWordpressWpEpisodes(filter: { acf: { number: { eq: $number } } }) {
      edges {
        node {
          title
          acf {
            ...intro
            content_episodes {
              ...quote
              ...richtext
            }
          }
        }
      }
    }
  }
`;
