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
  query FirstEpisode {
    allWordpressWpEpisodes(filter: { acf: { number: { eq: "1" } } }) {
      edges {
        node {
          title
          acf {
            quote
            number
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
